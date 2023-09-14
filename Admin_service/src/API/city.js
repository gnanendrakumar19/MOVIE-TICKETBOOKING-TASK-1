const city = require('../SERVICE/city')
const express = require ("express");
const app = express();
const bodyparser = require ("body-parser");
app.use(bodyparser.json());
const port = "3000";

app.post("/city/location", async (req, res)=>{
    try {
        return res.json(await city.addCity(req.body));
    } catch (error) {
        return res.json({
            status: 0,
            message: error.message,
        });
    }
});

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`port running on ${port}`)
    }
});