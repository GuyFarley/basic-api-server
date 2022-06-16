'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const whiskeySchema = require('./whiskey.schema');

// const DATABASE_URL = process.env.NODE_ENV === 'test'
//   ? 'sqlite::memory'
//   : process.env.DATABASE_URL || 'postgres://localhost:5432/gf401-api-app';

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://sjipcsuiiovocb:311a5ab72f07f45c1e524c40d7ae9411bb2200237f5564617e63b493b62c89bb@ec2-34-198-186-145.compute-1.amazonaws.com:5432/d33n319bajtmfe';

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    require: true,
    rejectUnauthorized: false,
  },
});

// create Whiskey Model

const WhiskeyModel = whiskeySchema(sequelize, DataTypes);

module.exports = {
  sequelize,
  WhiskeyModel,
};
