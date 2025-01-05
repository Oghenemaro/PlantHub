'use strict';

import Hapi from '@hapi/hapi'
import Vision from '@hapi/vision'
import plants from './Models/Plants.js'
import users from './Models/Users.js'
import connect from './connect.js'
import argon2 from 'argon2'
import dotenv from 'dotenv'
import joi from 'joi'
dotenv.config()
const jwt_secret = process.env.JWT_SECRET
const jwt_expires = process.env.JWT_EXPIRERATION


const planthub = async (server) => {

    try {
        connect.connect();
    } catch (error) {
        console.log(error);
    }

    server = Hapi.server({
        host: '0.0.0.0',
        port: 3000,
        routes:{
            cors:{
                origin: ['*']
            }
        }
    })

    await server.register(Vision);

    // server.views({
    //     engines: {
    //         html: require('handlebars')
    //     },
    //     path: __dirname + '/pages'
    // })

    // CREATE A USER
    server.route({
        method: 'POST',
        path: '/api/signup',
        handler: async (req, h) => {
            try {
                const { email, password } = req.payload
                // console.log(req.payload)
                const check = users.findOne({email: email})
                if(check){
                    // console.log(check)
                    throw new Error("Account already exist. Sign In");
                }
                const hashPassword = await argon2.hash(password)
                console.log(hashPassword)
                const user = await users.create({ email, password: hashPassword })
                // console.log(user)
                return h.response(user).code(200)
            } catch (error) {
                return h.response(error).code(500);
            }
        },
        options: {
            validate: {
                payload: joi.object({
                    email: joi.string().email().required(),
                    password: joi.string().min(5)
                })
            }
        }
    })

    // GET ALL PLANTS
    server.route({
        method: 'GET',
        path: '/api/plants',
        handler: async (req, h) => {
            try {
                const data = await plants.find();
                return h.response(data);
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    })

    // GET ALL PLANTS BY NAME
    server.route({
        method: 'GET',
        path: '/api/plant/{name}',
        handler: async (req, h) => {
            try {
                const value = req.params.name;
                if(value == undefined){
                    return h.response('search value cannot be empty').code(500);
                }else{
                    const data = await plants.findOne({name: value});
                    return h.response(data).code(200);
                }
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    })

    // ADD A PLANT
    server.route({
        method: 'POST',
        path: '/api/addPlant',
        handler: async (req, h) => {
            try {
                const data = await plants.create(req.payload);
                return h.response(data).code(200);
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    })

    // REMOVE A PLANT
    server.route({
        method: 'DELETE',
        path: '/api/plant/delete/{id}',
        handler: async (req, h) => {
            try {
                const id = req.params.id;
                console.log(id);
                const data = await plants.findByIdAndDelete(id);
                return h.response(data).code(200);
            } catch (error) {
                return h.response(error).code(500);
            }
        }
    })

    // UPDATE A PLANT
    server.route({
        method: 'PUT',
        path: '/api/plant/update/{id}',
        handler: async (req, h) => {
            try {
                
                const id = req.params.id;
                console.log(id);
                console.log(req.payload);
                const data = await plants.findByIdAndUpdate(id, req.payload);
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