const knex =require('../config/config')
const tables =require('./Tables')
const {Model} =require('objection');
const Booking = require('./booking');
Model.knex(knex)

class User extends Model{
    static get tableName(){
        return `${tables.user}`
    }
     static get relationMappings(){
        const Booking = require('./booking')
        return{
            Booking:{
                relation:Model.HasManyRelation,
               modelClass: Booking,
                join:{
                    from:`${tables.user}.UserID`,
                    to: `${ tables.booking }.Booking_UserID`,
                },
            },
        };
    }
}

// User.query()
//     .withGraphFetched('Booking')
//     .where('UserID',234)
//     .then(Booking => console.log(Booking[0]))
//     .catch(error => console.log(error.message));

module.exports = User
