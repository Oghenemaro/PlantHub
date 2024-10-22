'use strict'

const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

class Connection{
    static async connect(){

        try {
            const status = await mongoose.connect('mongodb+srv://maro:jzJf9nTUPb4xCakL@plantdb.bl6lo.mongodb.net/?retryWrites=true&w=majority&appName=PlantDB', {dbName:'PlantAPI'})

            // mongoose.connection.on('connected', () => console.log('connected'));
            // mongoose.connection.on('open', () => console.log('open'));
            // mongoose.connection.on('disconnected', () => console.log('disconnected'));
            // mongoose.connection.on('reconnected', () => console.log('reconnected'));
            // mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
            // mongoose.connection.on('close', () => console.log('close'));


            console.log('Atlas connected')
            console.log(status)

        } catch (error) {
            console.log(error)
        }
    }

    static async localConnect (){
        const url = "mongodb://db:27017/plantstore"
        try {
             await MongoClient.connect(url);
            console.log('local db connected')
        } catch (error) {
            console.log(error)
        }
    }
}


module.exports = Connection;