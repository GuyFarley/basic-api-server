'use strict';

const express = require('express');
const whiskeyRouter = require('./routes/whiskey');
const beerRouter = require('./routes/beer');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(whiskeyRouter);
app.use(beerRouter);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT)),
};