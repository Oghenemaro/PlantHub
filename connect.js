'use strict'

import { MongoClient } from 'mongodb'
import mongoose from 'mongoose'

export default class Connection{
    static async connect(){
        try {
            const status = await mongoose.connect('mongodb+srv://maro:jzJf9nTUPb4xCakL@plantdb.bl6lo.mongodb.net/?retryWrites=true&w=majority&appName=PlantDB', {dbName:'PlantAPI'})
            console.log('Atlas connected')
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

