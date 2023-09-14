const knex = require('../config/config')
const tables = require('./Tables')
const { Model } = require('objection');
Model.knex(knex)

class PAYMENT extends Model {
    static get tableName() {
        return `${tables.payment}`
    }
    static get relationMappings() {
        const Booking = require('./booking');
        return {
            booking: {
                relation: Model.BelongsToOneRelation,
                modelClass: Booking,
                join: {
                    from: `${tables.payment}.booking_id`,
                    to: `${tables.booking}.id`,
                },
            },
        };
    }
}

module.exports = PAYMENT