module.exports = (config) => {
    const GLOBALS = require(
        `../../riot_game_files/core-${config.locale}/` +
        `${config.locale}/data/globals-${config.locale}.json`
    );

    const getRarities = () => GLOBALS.rarities;

    const getVocabTerms = () => GLOBALS.vocabTerms;

    const getKeywords = () => GLOBALS.keywords;

    const getRegions = () => GLOBALS.regions;

    const getSpellSpeeds = () => GLOBALS.spellSpeeds;

    return {
        getRarities,
        getVocabTerms,
        getKeywords,
        getRegions,
        getSpellSpeeds,
    };
};
