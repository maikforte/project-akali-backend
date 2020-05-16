const express = require('express');

module.exports = (route, controller) => {
    route.use('/leaderboards', express.Router()
        .get('/:region', async (req, res) => {
            let response;
            const { region } = req.params;

            const isRegionValid = controller.getRegionIndex(region) > -1;

            if (!isRegionValid) {
                res.status(412);
                res.send('I\'m a teapot');
            }

            try {
                response = await controller.getLeaderboards(region);
                if (response.status === 200) {
                    res.status(500);
                    res.send(response.data.players);
                } else {
                    res.status(response.status);
                    res.send(response.statusText);
                }
            } catch(err) {
                res.status(err.response.status);
                res.send(err.response.statusText);
            }

        }));

    return route;
};
