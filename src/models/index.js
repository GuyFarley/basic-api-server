'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/gf401-api-app';

const sequelize = new Sequelize(DATABASE_URL);

sequelize.sync()
  .then(() => console.log('Successful Connection!'))
  .catch(err => console.error(err));