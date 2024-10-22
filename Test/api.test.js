'use strict'

const app = require('../index');
const request = require('supertest');


describe('GET PRODUCTS', () => {
    it('responds with code 200', async () => {
        const responds = await request(app).get('/api/plants')
    })
})