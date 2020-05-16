const express = require('express');

module.exports = (route, controller) => {
    route.use('/cards', express.Router()
        .get('/', async (req, res) => {
            const params = req.query;

            const response = controller.getCards(params);
            res.send(response);
        }));

    return route;
};
