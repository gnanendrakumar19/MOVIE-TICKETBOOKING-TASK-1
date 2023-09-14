const knex = require('../config/config')
const tables = require('./Tables')
const { Model } = require('objection');
Model.knex(knex)

class Show_Seat extends Model {
    static get tableName() {
        return `${tables.show_seat}`
    }
    static get relationMappings() {
        const CinemaSeat = require('./cinemaSeat');
        const Shows = require('./shows');
        const Booking = require('./booking');
        return {
            CinemaSeat: {
                relation: Model.BelongsToOneRelation,
                modelClass: CinemaSeat,
                join: {
                    from: `${tables.show_seat}.SHOW_SEAT_CinemaSeatID`,
                    to: `${tables.cinema_seat}.CinemaSeatID`,
                },
            },
            Shows: {
                relation: Model.BelongsToOneRelation,
                modelClass: Shows,
                join: {
                    from: `${tables.show_seat}.SHOW_SEAT_ShowID`,
                    to: `${tables.shows}.ShowID`,
                },
            },
            Booking: {
                relation: Model.BelongsToOneRelation,
                modelClass: Booking,
                join: {
                    from: `${tables.show_seat}.SHOW_SEAT_BookingID`,
                    to: `${tables.booking}.BookingID`,
                },
            },
        };
    }
}

module.exports = Show_Seat