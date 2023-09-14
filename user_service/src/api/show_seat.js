const utills = require('./utills')
const show_seat = require('../service/show_seat')
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = "4000";



// app.post("/show_seat", async (req, res) => {
//     try {
//         const body = req.body;
//         const ShowSeatID = utills.generateUUID();
//         Object.assign(body, { ShowSeatID: ShowSeatID });
//         const result = await show_seat.Show_Seat(body);
//         return res.json(result);
//     } catch (error) {
//         return res.json({ status: 0, error: error });
//     }
// });


app.post("/show_seat", async (req, res) => {
    try {
        return res.json(await show_seat.Show_Seat(req.body))
    } catch (error) {
        return { status: 0, error: error }
    }
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------CRUD API'S-------------------------------------------------------------------------------------------------------
// GET request
app.get("/users", async (req, res) => {
    try {
        // Logic to fetch all users
        const users = await user.getAll();
        return res.json({ status: 1, result: users });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// get by ID:

// const getById = async (UserID) => {
//     try {
//         const result = await user.getById(UserID);
//         return { status: 1, result: result };
//     } catch (error) {
//         return { status: 0, error: error.message };
//     }
// };
app.post("/get/:UserID", async (req, res) => {
    try {
        const result = await user.getById(req.params.UserID);
        return res.json({ status: 1, result: result });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});

// (async () => {
//     const UserID = 234; // Provide the desired user ID
//     const result = await getById(UserID);
//     console.log(result.result.result);
// })();



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Update By ID:

app.put("/update/user/:UserID", async (req, res) => {
    try {
        return res.json(await user.UpdateUser(req.params.UserID, req.body));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});


// -------------------------------------------------------------DELETE BY ID -------------------------------------------------------------------------------------------------------------------------
// DELETE BY ID

app.delete("/delete/user/:UserID", async (req, res) => {
    try {
        return res.json(await user.deleteUser(req.params.UserID));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`port running on ${port}`)
    }
});