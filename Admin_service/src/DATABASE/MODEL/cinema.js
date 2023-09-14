const knex = require("../CONFIG/CONFIG")
const tables = require('../../../../user_service/src/database/Model/Tables')
const { Model } = require('objection');
Model.knex(knex)
class Cinema extends Model {
    static get tableName() {
        return `${tables.cinema}`
    }
    static get relationMappings() {
        const Theater = require('./theater');
        const City = require('./city');
        return {
            city: {
                relation: Model.BelongsToOneRelation,
                modelClass: City,
                join: {
                    from: `${tables.cinema}.city_id`,
                    to: `${tables.city}.id`,
                },
            },
            Theaters: {
                relation: Model.HasManyRelation,
                modelClass: Theater,
                join: {
                    from: `${tables.cinema}.CinemaID`,
                    to: `${tables.theater}.THEATER_CinemaID`,
                },
            },
        };
    }
}

// Cinema.query()
//     .withGraphFetched('Theaters')
//     .where('CinemaID', 1)
//     .then(Theater => console.log(Theater[0]))
//     .catch(error => console.log(error.message));


module.exports = Cinema