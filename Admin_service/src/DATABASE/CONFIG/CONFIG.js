const config = require ("../../../../config.json").development

const sqlConfig = config.SQL;

const knex = require ("knex")({
    client:sqlConfig.CLIENT,
    connection:{
        // connectString: sqlConfig.CONNECT_STRING,
        host:sqlConfig.HOST,
        user: sqlConfig.USER,
        password: sqlConfig.PASWD,
        database:sqlConfig.DATABASE,
    },
    pool:{
        min:sqlConfig.MIN,
        max:sqlConfig.MAX,
    },
    acquireConnectionTimeout: 200000,
});

module.exports = knex;