const knex = require("../CONFIG/CONFIG")
const tables = require('../../../../user_service/src/database/Model/Tables')
const { Model } = require('objection');
Model.knex(knex)
class Admin extends Model {
    static get tableName() {
        return `${tables.admin}`
    }
}

module.exports = Admin