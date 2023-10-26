'use strict'

const { MongoClient } = require('mongodb');
const url = 'mongodb://admin:password@localhost:27017';
const client = new MongoClient(url);
const dbname = 'users';

class dbConnection{
    static async connect(uri, dbname, dbcollection){
        let connectStatus;
        try {
            connectStatus = (await client.connect(uri)).db(dbname).collection(dbcollection);
        } catch (err) {
            console.log(err);
        } finally {
            client.close();
        }
        return connectStatus;
    }
}

export default dbConnection;