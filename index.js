'use strict';

const Hapi = require('@hapi/hapi');
const Hoek = require('@hapi/hoek');
const Vision = require('@hapi/vision');
const Path = require('path');
const { error } = require('console');
const connect = require('./connect');
const plant = require('./Models/Plants');
const path = require('path');



const planthub = async (server) => {

    try {
        connect.connect();
    } catch (error) {
        console.log(error);
    }

        server = Hapi.server({
        host: '0.0.0.0',
        port: 3000,
        routes: {
            cors:{
                origin: ['*'],
                credentials: true,
            }
        }
    })

    await server.register(Vision);

    server.views({
        engines: {
            html: require('handlebars')
        },
        path: __dirname + '/pages'
    })

    server.route({
        method: 'GET',
        path: '/api/plants',
        handler: async (req, h) => {
            try {
                const data = await plant.find();
                return h.response(data);
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    })
    server.route({
        method: 'GET',
        path: '/api/plant/{name}',
        handler: async (req, h) => {
            try {
                const value = req.params.name;
                if(value == undefined){
                    return h.response('search value cannot be empty').code(500);
                }else{
                    const data = await plant.findOne({name: value});
                    return h.response(data).code(200);
                }
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    })

    server.route({
        method: 'POST',
        path: '/api/addPlant',
        handler: async (req, h) => {
            try {
                const data = await plant.create(req.payload);
                return h.response(data).code(200);
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    })

    server.route({
        method: 'DELETE',
        path: '/api/plant/delete/{id}',
        handler: async (req, h) => {
            try {
                const id = req.params.id;
                console.log(id);
                const data = await plant.findByIdAndDelete(id);
                return h.response(data).code(200);
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    })

    server.route({
        method: 'PUT',
        path: '/api/plant/update/{id}',
        handler: async (req, h) => {
            try {
                
                const id = req.params.id;
                console.log(id);
                console.log(req.payload);
                const data = await plant.findByIdAndUpdate(id, req.payload);
                return h.response(data).code(200);   
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    })
    
    await server.start();
    console.log('Server Operational', server.info.uri)
    process.on('unhandledRejection', (err) => {
        console.log(err)
        process.exit(1)
    })
}

planthub();