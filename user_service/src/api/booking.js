const utills = require('./utills')
const booking = require('../service/booking')
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = "4001";



app.post("/booking", async (req, res) => {
    try {
        const body = req.body;
        const bookingID = utills.generateUUID();
        Object.assign(body, { BookingID: bookingID });
        const result = await booking.Booking(body);
        return res.json(result);
    } catch (error) {
        return res.json({ status: 0, error: error });
    }
});

// app.post("/booking",async (req, res)=>{
//     try{
//         return res.json(await booking.Booking(req.body))
//     }catch(error){
//         return{status:0,error:error}
//     }
// })

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------CRUD API'S-------------------------------------------------------------------------------------------------------
// GET request
app.get("/booking", async (req, res) => {
    try {
        // Logic to fetch all users
        const booking = await booking.getAll();
        return res.json({ status: 1, result: booking });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});




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
app.post("/get/:BookingID", async (req, res) => {
    try {
        const result = await booking.getBookingByID(req.params.BookingID);
        return res.json({ status: 1, result: result });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});

// (async () => {
//     const BookingID = 1; // Provide the desired BookingID
//     const result = await getById(BookingID);
//     console.log(result.result.result);
// })();



// ---------------------------------------------------------------UPDATE BY ID-------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Update By ID:

app.put("/update/booking/:BookingID", async (req, res) => {
    try {
        return res.json(await booking.updateBooking(req.params.BookingID, req.body));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});



// -------------------------------------------------------------DELETE BY ID -------------------------------------------------------------------------------------------------------------------------
// DELETE BY ID

app.delete("/delete/booking/:BookingID", async (req, res) => {
    try {
        return res.json(await booking.deleteBooking(req.params.BookingID));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});









// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ORM

app.listen(port,(err)=>{
    if (err){
        console.log(err)
    }else{
        console.log(`port running on ${port}`)
    }
});