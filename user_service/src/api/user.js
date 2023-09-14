const utills =require('./utills')
const user =require('../service/user')
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port ="4000";
const validationHandler = require("../../../validations/validation-handler");
const UserValidation = require ("../../../validations/user")

// Sign Up

app.post("/user/signup", UserValidation.signUpValidation(), validationHandler, async (req, res) => {
    try {
        const body = req.body;
        const userID = utills.generateUUID();
        Object.assign(body, { UserID: userID });
        const result = await user.signUpUser(body);
        return res.json(result);
    } catch (error) {
        return res.json({ status: 0, error: error });
    }
});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
// Sign IN
app.post("/user/signin",async(req,res)=>{
    try{
        return res.json(await user.signIn(req.body))
    }catch(error){
        return{status:0,error:error}
    }
});

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


//---------------------------------------- or to get result in postman ------------------------------------------------------------------
// const getById = async (UserID) => {
//     try {
//         const result = await user.getById(UserID);
//         return { status: 1, result: result };
//     } catch (error) {
//         return { status: 0, error: error.message };
//     }
// };

// app.post("/get/:UserID", async (req, res) => {
//     try {
//         const UserID = req.params.UserID;
//         const result = await getById(UserID);
//         res.json(result);
//     } catch (error) {
//         res.json({ status: 0, error: error.message });
//     }
// });

// (async () => {
//     const UserID = 234; // Provide the desired user ID
//     const result = await getById(UserID);
//     console.log(result.result.result);
// })();

// ------------------------------------------------------------BY Name------------------------------------------------------------------------------------------------------------------------
//By Name

app.get("/get/:Name", async (req, res) => {
    try {
        return res.json(await user.getByName(req.body.Name));
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});

// (async () => {
//     const Name = "gnana"; // Provide the desired user Name
//     const result = await user.getByName(Name);
//     console.log(result.result);
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

app.delete("/delete/user/:UserID", async (req, res)=>{
    try{
        return res.json(await user.deleteUser(req.params.UserID));
    }catch (error){
        return res.json({ status: 0, error: error.message })
    }
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Delete By Name:

app.delete("/delete/user/:Name", async (req, res)=>{
    try{
        return res.json(await user.deleteUserByName(req.params.Name));
    }catch(error){
        return res.json({ ststus:0, error: error.message})
    }
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ORM
app.post('/v1/get/user', async (req, res) => {
    try {
        return res.json(await user.getBooking(req.body))
    } catch (error) {
        return { status: 0, result: 'no booking available' }
    }
});

// PORT
app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`port running on ${port}`)
    }
});

