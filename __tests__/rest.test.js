'use strict';

const supertest = require('supertest');
const { server } = require('../src/server');
const { sequelize } = require('../src/models');
const mockRequest = supertest(server);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Testing REST API', () => {

  test('Create a whiskey', async () => {
    let response = await mockRequest.post('/whiskey').send({
      name: 'Buffalo Trace',
      category: 'Bourbon',
      proof: 90,
    });

    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('Buffalo Trace');
    expect(response.body.category).toEqual('Bourbon');
    expect(response.body.proof).toEqual(90);
  });

  test('Get all whiskeys', async () => {
    let response = await mockRequest.get('/whiskey');
    expect(response.status).toEqual(200);

  });

  test('Get one whiskey', async () => {
    let response = await mockRequest.get('/whiskey/1');
    expect(response.status).toEqual(200);
    expect(response.data.body.name).toEqual('Buffalo Trace');
    expect(response.data.body.category).toEqual('Bourbon');
    expect(response.data.body.proof).toEqual(90);
  });

  test('Should update a whiskey', () => {
    expect(true).toBe(false);
  });

  test('Should delete a whiskey', () => {
    expect(true).toBe(false);
  });

});
