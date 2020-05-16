const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const lodash = require('lodash');
const config = require('../../config/config');

const controller = require('./leaderboards.controller')(axios, config, lodash);
const router = require('./leaderboards.router');

module.exports = () => {
    const route = express.Router();
    route.use(bodyParser.json());

    return router(route, controller);
};
