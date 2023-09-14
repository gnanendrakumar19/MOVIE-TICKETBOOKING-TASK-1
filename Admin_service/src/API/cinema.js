const cinema = require('../SERVICE/cinema')
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const port = "3020";

app.post("/cinema", async (req, res) => {
    try {
        return res.json(await cinema.addCinema(req.body));
    } catch (error) {
        return res.json({
            status: 0,
            message: error.message,
        });
    }
});



// ------------------------------------------------CRUD API'S-------------------------------------------------------------------------------------------------------
// GET request
app.get("/cinema", async (req, res) => {
    try {
        // Logic to fetch all cinema
        const Cinema = await cinema.getCinemaList();
        return res.json({ status: 1, result: cinema });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});



// --------------------------------------------------------GET BY ID------------------------------------------------------------------------------------------------------------------------------------------------
// get by ID:

// const getCinemaById = async (CinemaID) => {
//     try {
//         const result = await cinema.getCinemaById(CinemaID);
//         return { status: 1, result: result };
//     } catch (error) {
//         return { status: 0, error: error.message };
//     }
// };
app.post("/get/:CinemaID", async (req, res) => {
    try {
        const result = await cinema.getCinemaById(req.params.CinemaID);
        return res.json({ status: 1, result: result });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});

// (async () => {
//     const CinemaID = 234; // Provide the desired CinemaID
//     const result = await getCinemaById(CinemaID);
//     console.log(result.result.result);
// })();

// ------------------------------------------------------------UPDATE BY ID----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Update By ID:

app.put("/update/cinema/:CinemaID", async (req, res) => {
    try {
        return res.json(await cinema.updateCinema(req.params.CinemaID, req.body));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});


// -------------------------------------------------------------DELETE BY ID -------------------------------------------------------------------------------------------------------------------------
// DELETE BY ID

app.delete("/delete/admin/:CinemaID", async (req, res) => {
    try {
        return res.json(await cinema.deleteCinema(req.params.CinemaID));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ORM
app.post('/v1/get/cinema', async (req, res) => {
    try {
        return res.json(await cinema.getCinema(req.body))
    } catch (error) {
        return { status: 0, result: 'no cinema available' }
    }
})



app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`port running on ${port}`)
    }
});