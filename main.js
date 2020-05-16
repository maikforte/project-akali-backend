// Dependencies
const express = require('express');
const app = express();

// Environment
require('dotenv').config();

// Utilities
const config = require('./config/config');

// Middlewares
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// App Components
const leaderboards = require('./app/leaderboards')();
const globals = require('./app/globals')();
const cards = require('./app/cards')();

// Routes
app.use(leaderboards);
app.use(globals);
app.use(cards);

// Spin-up Server
app.listen(config.port, () => {
    console.log(`Listening on port: ${config.port}...`);
});
