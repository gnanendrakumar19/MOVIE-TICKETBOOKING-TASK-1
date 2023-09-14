// const express = require("express");
// const app = express();
// const swaggerUI = require("swagger-ui-express");
// const apiDocument = require('./swagger.json');
// app.use('/swagger', swaggerUI.serve, swaggerUI.setup(apiDocument));

// app.listen('1111', (err, result) => {
//     if (err) throw err
//     else (console.log('PORT 1111 CONNECTED ENJOY PANDAGO'))
// })


const express = require ("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const apiDocument = require ('./swagg.json');
app.use('/swagg', swaggerUI.serve, swaggerUI.setup(apiDocument));

// // const knex = require('../user_service/src/database/config/config')
// // const tables = require('../user_service/src/database/Model/Tables')
// // const { Model } = require('objection');
// // Model.knex(knex)


app.listen('5555',(err,result)=>{
    if (err) throw err
    else(console.log('PORT 5555 CONNECTED ENJOY PANDAGO'))
})