const movies = require('../SERVICE/movies')
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const port = "3000";

app.post("/movies", async (req, res) => {
    try {
        return res.json(await movies.addMovies(req.body));
    } catch (error) {
        return res.json({
            status: 0,
            message: error.message,
        })
    }
});


// ------------------------------------------------CRUD API'S-------------------------------------------------------------------------------------------------------
// GET request
app.get("/movies", async (req, res) => {
    try {
        // Logic to fetch all movies
        const Movies = await movies.getMoviesList();
        return res.json({ status: 1, result: Movies });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// get by ID:

// const getMoviesById = async (MovieID) => {
//     try {
//         const result = await user.getMoviesById(MovieID);
//         return { status: 1, result: result };
//     } catch (error) {
//         return { status: 0, error: error.message };
//     }
// };
app.post("/get/:MovieID", async (req, res) => {
    try {
        const result = await movies.getMoviesById(req.params.MovieID);
        return res.json({ status: 1, result: result });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});

// (async () => {
//     const MovieID = 234; // Provide the desired MovieID
//     const result = await getMoviesById(MovieID);
//     console.log(result.result.result);
// })();


// ------------------------------------------------------------BY Name------------------------------------------------------------------------------------------------------------------------
//By Name

app.post("/get/Name", async (req, res) => {
    try {
        return res.json(await movies.getMovieByName(req.body.Name));
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});

// (async () => {
//     const Name = "gnana"; // Provide the desired user ID
//     const result = await user.getByName(Name);
//     console.log(result.result);
// })();


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Update By ID:

app.put("/update/movies/:MovieID", async (req, res) => {
    try {
        return res.json(await movies.updateMovies(req.params.MovieID, req.body));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});


// -------------------------------------------------------------DELETE BY ID -------------------------------------------------------------------------------------------------------------------------
// DELETE BY ID

app.delete("/delete/movie:MovieID", async (req, res) => {
    try {
        return res.json(await movies.deleteMovies(req.params.MovieID));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Delete By Name:

app.delete("/delete/movies/:Name", async (req, res) => {
    try {
        return res.json(await movies.deleteMoviesByName(req.params.Name));
    } catch (error) {
        return res.json({ ststus: 0, error: error.message })
    }
});



app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(`port running on ${port}`)
    }
});