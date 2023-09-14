const knex = require("../CONFIG/CONFIG")
const tables = require('../../../../user_service/src/database/Model/Tables')
// const Objection = require("objection")
const { Model } = require('objection');
Model.knex(knex)

class Shows extends Model {
    static get tableName() {
        return `${tables.shows}`
    }
    static get relationMappings() {
        const Theater = require('./theater');
        const Movies = require('./movies');
        const Booking = require('./booking');
        return {
            Theater: {
                relation: Model.BelongsToOneRelation,
                modelClass: Theater,
                join: {
                    from: `${tables.shows}.Shows_TheaterID`,
                    to: `${tables.theater}.TheaterID`,
                },
            },
            Movies: {
                relation: Model.BelongsToOneRelation,
                modelClass: Movies,
                join: {
                    from: `${tables.shows}.Shows_MovieID`,
                    to: `${tables.movies}.MovieID`,
                },
            },
            Bookings: {
                relation: Model.HasManyRelation,
                modelClass: Booking,
                join: {
                    from: `${tables.shows}.ShowID`,
                    to: `${tables.booking}.Booking_ShowID`,
                },
            },
        };
    }
}

module.exports = Shows