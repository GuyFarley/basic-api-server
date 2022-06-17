'use strict';

const express = require('express');
const { BeerModel } = require('../models');
const notFoundHandler = require('../error-handlers/404');
const serverErrorHandler = require('../error-handlers/500');
const logger = require('../middleware/logger');

const router = express.Router();

router.use(logger);

// post
router.post('/beer', async (req, res, next) => {
  let beer = req.body;
  // console.log(req.body);
  let response = await BeerModel.create(beer);
  res.status(200).send(response);
});

// get all
router.get('/beer', async (req, res, next) => {
  let allBeers = await BeerModel.findAll();
  // console.log(response);
  res.status(200).send(allBeers);
});

// get one
router.get('/beer/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneBeer = await BeerModel.findOne({ where: { id } });
  console.log(oneBeer);
  res.status(200).send(oneBeer);
});

// put
router.put('/beer/:id', async (req, res, next) => {
  let { id } = req.params;

  let updatedBeer = await BeerModel.findOne({ where: { id } });
  console.log(updatedBeer);
  res.status(200).send(updatedBeer);
});

// delete
router.delete('/beer/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedBeer = await BeerModel.findOne({ where: { id } });

  await BeerModel.destroy({ where: { id } });
  console.log(deletedBeer);
  res.status(200).send(deletedBeer);
});

router.use('*', notFoundHandler);

router.use(serverErrorHandler);

module.exports = router;