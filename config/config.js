const config = {
    port: process.env.PORT || 3000,
    riotApiKey: process.env.RIOT_API_KEY || 'api_key',
    apiRegions: [
        'americas',
        'asia',
        'europe',
        'sea',
    ],
    locale: 'en_us',
    pageLimit: 10,
};

module.exports = config;
