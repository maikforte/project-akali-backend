module.exports = (config, alasql) => {
    const SET_1 = require(
        `../../riot_game_files/set1-${config.locale}/` +
        `${config.locale}/data/set1-${config.locale}.json`
    );

    const SET_2 = require(
        `../../riot_game_files/set2-${config.locale}/` +
        `${config.locale}/data/set2-${config.locale}.json`
    );

    const CARDS = SET_1.concat(SET_2);

    const createWhereClause = params => {
        let whereClause = '';

        if (!params) {
            return whereClause;
        }

        for (const [index, [key, value]] of Object.entries(Object.entries(params))) {
            if (key === 'page') {
                continue;
            }

            if (parseInt(index) === 0) {
                whereClause = `WHERE ${key}='${value}'`;
            } else {
                whereClause += ` AND ${key}='${value}'`;
            }
        }

        return whereClause;
    }

    const getPagination = page => {
        let pagination = '';

        if (!page) {
            return pagination;
        }

        pagination = `OFFSET ${config.pageLimit * (page - 1)} FETCH NEXT ${config.pageLimit}`

        return pagination;
    }

    const getCards = params => {
        const { page } = params;
        const whereClause = createWhereClause(params);
        const pagination = getPagination(page);

        const cards = alasql(`SELECT * FROM ? ${whereClause} ORDER BY cost DESC ${pagination}`, [CARDS]);

        return cards;
    };

    return {
        getCards,
    };
};
