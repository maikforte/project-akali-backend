const express = require('express');

module.exports = (route, controller) => {
    route.use('/globals', express.Router()
        .get('/rarities', async (req, res) => {
            const rarities = controller.getRarities();
            res.send(rarities);
        })
        .get('/vocab-terms', async (req, res) => {
            const rarities = controller.getVocabTerms();
            res.send(rarities);
        })
        .get('/keywords', async (req, res) => {
            const rarities = controller.getKeywords();
            res.send(rarities);
        })
        .get('/regions', async (req, res) => {
            console.log('test');
            const rarities = controller.getRegions();
            console.log('rarities');
            res.send(rarities);
        })
        .get('/spell-speeds', async (req, res) => {
            const rarities = controller.getSpellSpeeds();
            res.send(rarities);
        }));

    return route;
};
