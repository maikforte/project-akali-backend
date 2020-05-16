module.exports = (axios, config, lodash) => {

    const request = (type, region, params, body) => axios({
        headers: {
            'X-Riot-Token': `${config.riotApiKey}`
        },
        url: `https://${region}.api.riotgames.com/lor/ranked/v1/leaderboards`,
        method: type,
        data: body,
        params,
    });

    const getLeaderboards = async region => request('get', region);

    const getRegionIndex = region => lodash.indexOf(config.apiRegions, region);

    return {
        getLeaderboards,
        getRegionIndex,
    };
};
