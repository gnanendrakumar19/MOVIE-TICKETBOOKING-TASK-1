const knex = require("../config/config")
const tables = require('./Tables')
const { Model } = require('objection');
Model.knex(knex)
class Cinema_Seat extends Model {
    static get tableName() {
        return `${tables.cinema_seat}`
    }
    static get relationMappings() {
        const Theater = require('./theater');
        const ShowSeat = require('./showSeat');
        return {
            Theater: {
                relation: Model.BelongsToOneRelation,
                modelClass: Theater,
                join: {
                    from: `${tables.cinema_seat}.CINEMA_SEAT_TheaterID`,
                    to: `${tables.theater}.TheaterID`,
                },
            },
            ShowSeats: {
                relation: Model.HasManyRelation,
                modelClass: ShowSeat,
                join: {
                    from: `${tables.cinema_seat}.CinemaSeatID`,
                    to: `${tables.show_seat}.SHOW_SEAT_CinemaSeatID`,
                },
            },
        };
    }
}

module.exports = Cinema_Seat