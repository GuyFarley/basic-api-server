'use strict';

const express = require('express');
const { WhiskeyModel } = require('../models');

const router = express.Router();

router.post('/whiskey', async (req, res, next) => {
  let whiskey = req.body;
  // console.log(req.body);
  let response = await WhiskeyModel.create(whiskey);
  res.status(200).send(response);
});

router.get('/whiskey', async (req, res, next) => {
  let response = await WhiskeyModel.findAll();
  // console.log(response);
  res.status(200).send(response);
});

router.get('/whiskey/:id', async (req, res, next) => {
  let response = await WhiskeyModel.findAll({
    where: { id: 1 },
  });
  console.log(response);
  res.status(200).send(response);
});

module.exports = router;