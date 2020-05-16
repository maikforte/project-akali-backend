const config = {
    port: process.env.API_PORT || 3000,
    riotApiKey: process.env.RIOT_API_KEY || 'api_key',
    apiRegions: [
        'americas',
        'asia',
        'europe',
        'sea',
    ]
};

module.exports = config;
