const knex = require('../config/config')
const tables = require('./Tables')
const { Model } = require('objection');
const User = require('./user')
// const Shows = require('./show')
// const ShowSeat = require('./showSeat')
Model.knex(knex)


class Booking extends Model {
    static get tableName() {
        return `${tables.booking}`
    }
    static get relationMappings() {
        const User = require('./user');
        // const Show = require('./show');
        // const ShowSeat = require('./showSeat');
        return {
            User: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: `${tables.booking}.Booking_UserID`,
                    to: `${tables.user}.UserID`,
                },
            },
            // Show: {
            //     relation: Model.BelongsToOneRelation,
            //     modelClass: Show,
            //     join: {
            //         from: `${tables.booking}.Booking_ShowID`,
            //         to: `${tables.shows}.ShowID`,
            //     },
            // },
            // ShowSeats: {
            //     relation: Model.HasManyRelation,
            //     modelClass: ShowSeat,
            //     join: {
            //         from: `${tables.booking}.BookingID`,
            //         to: `${tables.show_seat}.SHOW_SEAT_BookingID`,
            //     },
            // },
            // payment: {
            //     relation: Model.HasOneRelation,
            //     modelClass: Payment,
            //     join: {
            //         from: `${tables.booking}.id`,
            //         to: `${tables.payment}.booking_id`,
            //     },
            // }
        };
    }
}


// Booking.query()
//     .withGraphFetched('User')
//     .where('BookingID',1)
//     .then(User => console.log(User[0]))
//     .catch(error => console.log(error.message));

module.exports = Booking