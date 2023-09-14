const shows = require ('../SERVICE/shows')
const express = require ("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = "4000";

app.post("/shows",async(req,res)=>{
    try{
        return res.json(await shows.Shows(req.body));
    } catch (error){
        return res.json({
            status:0,
            message:error,message,
        });
    }
});



// ------------------------------------------------CRUD API'S-------------------------------------------------------------------------------------------------------
// GET request
app.get("/shows", async (req, res) => {
    try {
        // Logic to fetch all shows
        const Shows = await shows.getShowsList();
        return res.json({ status: 1, result: Shows });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});
// -----------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// get by ID:

// const getShowById = async (ShowID) => {
//     try {
//         const result = await user.getShowById(ShowID);
//         return { status: 1, result: result };
//     } catch (error) {
//         return { status: 0, error: error.message };
//     }
// };
app.post("/get/:ShowID", async (req, res) => {
    try {
        const result = await shows.getShowById(req.params.ShowID);
        return res.json({ status: 1, result: result });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});

// (async () => {
//     const ShowID = 234; // Provide the desired ShowID
//     const result = await getMoviesById(ShowID);
//     console.log(result.result.result);
// })();



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Update By ID:

app.put("/update/movies/:ShowID", async (req, res) => {
    try {
        return res.json(await shows.updateShows(req.params.ShowID, req.body));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});


// -------------------------------------------------------------DELETE BY ID -------------------------------------------------------------------------------------------------------------------------
// DELETE BY ID

app.delete("/delete/movie:ShowID", async (req, res) => {
    try {
        return res.json(await shows.deleteShows(req.params.ShowID));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});


app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`port running on ${port}`)
    }
});