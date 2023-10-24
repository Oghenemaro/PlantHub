'use strict';

const Hapi = require('@hapi/hapi');
const Hoek = require('@hapi/hoek');
const Vision = require('@hapi/vision');
const Path = require('path');
// destructuring or not
const { MongoClient } = require('mongodb');

const url = 'mongodb://admin:password@localhost:27017';
const client = new MongoClient(url);
const dbname = 'users';

const planthub = async () => {
    const server = Hapi.server({
        host: '127.0.0.1',
        port: 3000
    });

    await server.register(Vision);

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'pages'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return 'We up';

        }

    });
    
    server.route({
        method: 'POST',
        path: '/',
        handler: async (req, h) => {

            let values = req.payload;
            values['userid'] = 1;
            let query = {userid: 1};
            let updatedValues = {$set: values};
            let result;
            try {
                await client.connect();
                console.log('Connection successful');
                const db = client.db(dbname);
                const dbcollection = db.collection('user');
                result = await dbcollection.insertOne(values);
                // result = await dbcollection.updateOne(query, updatedValues, {upset: true});
                console.log('update successfull');
            } catch (err) {
                console.log(err);
            } finally {
                client.close();
            }
            return result;
        }
    });
    
    await server.start();
    console.log('Server Operational', server.info.uri);
    process.on('unhandledRejection', (err) => {
        console.log(err);
        process.exit(1);
    });
}

planthub();