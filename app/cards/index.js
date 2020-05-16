const express = require('express');
const bodyParser = require('body-parser');
const alasql = require('alasql');
const config = require('../../config/config');

const controller = require('./cards.controller')(config, alasql);
const router = require('./cards.router');

module.exports = () => {
    const route = express.Router();
    route.use(bodyParser.json());

    return router(route, controller);
};
