const express = require('express');

module.exports = (route, controller) => {
    route.use('/scaffold', express.Router()
        .get('/', async (req, res) => {
            const response = controller.scaffold();
            res.send(response);
        }));

    return route;
};
