const theater = require('../SERVICE/theater')
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const port = "3000";

app.post("/theater", async (req, res) => {
    try {
        return res.json(await theater.addTheater(req.body));
    } catch (error) {
        return res.json({
            status: 0,
            message: error.message,
        })
    }
});


// ------------------------------------------------CRUD API'S-------------------------------------------------------------------------------------------------------
// GET request
app.get("/Theater", async (req, res) => {
    try {
        // Logic to fetch all Theater
        const Theater = await theater.getTheaterList();
        return res.json({ status: 1, result: Theater });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// get by ID:

// const getTheaterById = async (TheaterID) => {
//     try {
//         const result = await theater.getTheaterById(TheaterID);
//         return { status: 1, result: result };
//     } catch (error) {
//         return { status: 0, error: error.message };
//     }
// };
app.post("/get/:TheaterID", async (req, res) => {
    try {
        const result = await theater.getTheaterById(req.params.TheaterID);
        return res.json({ status: 1, result: result });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});

// (async () => {
//     const TheaterID = 234; // Provide the desired TheaterID
//     const result = await getTheaterById(TheaterID);
//     console.log(result.result.result);
// })();



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Update By ID:

app.put("/update/Theaters/:TheaterID", async (req, res) => {
    try {
        return res.json(await theater.updateTheater(req.params.TheaterID, req.body));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});


// -------------------------------------------------------------DELETE BY ID -------------------------------------------------------------------------------------------------------------------------
// DELETE BY ID

app.delete("/delete/movie:TheaterID", async (req, res) => {
    try {
        return res.json(await theater.deleteTheater(req.params.TheaterID));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});


app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`port running on ${port}`)
    }
});