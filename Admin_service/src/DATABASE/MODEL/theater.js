const knex = require('../CONFIG/CONFIG')
const tables = require('./Tables')
const { Model } = require('objection');
Model.knex(knex)

class Theater extends Model {
    static get tableName() {
        return `${tables.theater}`
    }
    static get relationMappings() {
        const Shows = require('./shows');
        const Cinema = require('./cinema');
        const CinemaSeat = require('./cinemaSeat');
        return {
            Shows: {
                relation: Model.HasManyRelation,
                modelClass: Shows,
                join: {
                    from: `${tables.theater}.TheaterID`,
                    to: `${tables.shows}.Shows_TheaterID`,
                },
            },
            Cinema: {
                relation: Model.BelongsToOneRelation,
                modelClass: Cinema,
                join: {
                    from: `${tables.theater}.THEATER_CinemaID`,
                    to: `${tables.cinema}.CinemaID`,
                },
            },
            CinemaSeat: {
                relation: Model.HasManyRelation,
                modelClass: CinemaSeat,
                join: {
                    from: `${tables.theater}.TheaterID`,
                    to: `${tables.cinema_seat}.CINEMA_SEAT_TheaterID`,
                },
            },
        };
    }
}


Theater.query()
    .withGraphFetched('Shows')
    .where('Shows_TheaterID', 1)
    .then(Shows => console.log(Shows[0]))
    .catch(error => console.log(error.message));

module.exports = Theater