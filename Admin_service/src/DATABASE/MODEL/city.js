const knex = require ("../CONFIG/CONFIG")
const tables = require ('../../../../user_service/src/database/Model/Tables')
// const Objection = require("objection")
const {Model} = require ('objection');
const Cinema = require("./cinema");
Model.knex(knex)

class City extends Model{
    static get tableName(){
        return `${tables.city}`
    }
    static get relationMappings() {
        const Cinema = require('./cinema');
        return {
            Cinema: {
                relation: Model.HasManyRelation,
                modelClass: Cinema,
                join: {
                    from: `${tables.city}.CityID`,
                    to: `${tables.cinema}.CINEMA_CityID`,
                },
            },
        };
    }
}

City.query()
    .withGraphFetched('Cinema')
    .where('CityID',1)
    .then(Cinema=> console.log(Cinema[0]))
    .catch(error => console.log(error.message));

// City.query()
//     .withGraphFetched('Cinema')
//     .where('CityID', 1)
//     .then(city => console.log(city.Cinema))
//     .catch(error => console.log(error.message));



module.exports = City