const knex = require('../CONFIG/CONFIG')
const tables = require('../../../../user_service/src/database/Model/Tables')
// const tables = require('../../../../user_service/src/database/Model/Tables')
const { Model } = require('objection');
Model.knex(knex)

class Movies extends Model {
    static get tableName() {
        return `${tables.movies}`
    }
    static get relationMappings() {
        const City = require('./city');
        const Shows = require('./shows');
        return {
            City: {
                relation: Model.BelongsToOneRelation,
                modelClass: City,
                join: {
                    from: `${tables.movies}.Movies_CityID`,
                    to: `${tables.city}.CityID`,
                },
            },
            Shows: {
                relation: Model.HasManyRelation,
                modelClass: Shows,
                join: {
                    from: `${tables.movies}.MovieID`,
                    to: `${tables.shows}.Shows_MovieID`,
                },
            },
        };
    }

}

Movies.query()
    .withGraphFetched('City')
    .where('Movies_CityID', 1)
    .then(Shows => console.log(Shows[0]))
    .catch(error => console.log(error.message));

module.exports = Movies