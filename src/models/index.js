'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const whiskeySchema = require('./whiskey.schema');
const beerSchema = require('./beer.schema');
require('dotenv').config();

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/gf401-api-app';

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// create Whiskey Model

const WhiskeyModel = whiskeySchema(sequelize, DataTypes);
const BeerModel = beerSchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  WhiskeyModel,
  BeerModel,
};
