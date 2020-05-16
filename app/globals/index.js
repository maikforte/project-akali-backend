const express = require('express');
const bodyParser = require('body-parser');
const config = require('../../config/config');

const controller = require('./globals.controller')(config);
const router = require('./globals.router');

module.exports = () => {
    const route = express.Router();
    route.use(bodyParser.json());

    return router(route, controller);
};
