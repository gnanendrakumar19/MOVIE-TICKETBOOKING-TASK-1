// Admin Sign Up
const admin= require ('../SERVICE/admin')
const express = require ("express");
const app = express();
const bodyparser = require ("body-parser");
const admin = require('../SERVICE/admin');
app.use(bodyparser.json());
const port = "4010";

app.post("/admin/signup", async (req,res)=>{
    try {
        return res.json(await admin.signUpAdmin(req.body)); } catch (error) {
        return res.json({
            status: 0,
            message: error.message,
        });
    }
});

// Sign IN

app.post ("/admin/signin",async(req,res)=>{
    try{
        return res.json(await admin.signIn(req.body))
    }catch(error){
        return{status:0,error:error}
    }
});


// ------------------------------------------------CRUD API'S-------------------------------------------------------------------------------------------------------
// GET request
app.get("/admin", async (req, res) => {
    try {
        // Logic to fetch all admin
        const Admin = await admin.getAllAdmins();
        return res.json({ status: 1, result: Admin });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// get by ID:

// const getAdminById = async (AdminID) => {
//     try {
//         const result = await user.getAdminById(AdminID);
//         return { status: 1, result: result };
//     } catch (error) {
//         return { status: 0, error: error.message };
//     }
// };
app.post("/get/:AdminID", async (req, res) => {
    try {
        const result = await admin.getAdminById(req.params.AdminID);
        return res.json({ status: 1, result: result });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});

// (async () => {
//     const AdminID = 234; // Provide the desired AdminID
//     const result = await getAdminById(AdminID);
//     console.log(result.result.result);
// })();

// ------------------------------------------------------------BY Name------------------------------------------------------------------------------------------------------------------------
//By Name

// app.post("/get/Admin/Name", async (req, res) => {
//     try {
//         return res.json(await admin.getByName(req.body.Name));
//     } catch (error) {
//         return res.json({ status: 0, error: error.message });
//     }
// });

// (async () => {
//     const Name = "gnana"; // Provide the desired user ID
//     const result = await user.getByName(Name);
//     console.log(result.result);
// })();


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Update By ID:

app.put("/update/admin/:AdminID", async (req, res) => {
    try {
        return res.json(await admin.updateAdmin(req.params.UserID, req.body));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});


// -------------------------------------------------------------DELETE BY ID -------------------------------------------------------------------------------------------------------------------------
// DELETE BY ID

app.delete("/delete/admin/:AdminID", async (req, res) => {
    try {
        return res.json(await admin.deleteAdmin(req.params.AdminID));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Delete By Name:

// app.delete("/delete/admin/:Name", async (req, res) => {
//     try {
//         return res.json(await admin.deleteAdminByName(req.params.Name));
//     } catch (error) {
//         return res.json({ ststus: 0, error: error.message })
//     }
// });



app.listen(port, (err)=>{
    if (err) {
        console.log (err)
    }
    else{
        console.log (`port running on ${port}`)
    }
});