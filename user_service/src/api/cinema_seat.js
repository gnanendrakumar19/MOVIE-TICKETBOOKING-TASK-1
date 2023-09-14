const utills = require('./utills')
const booking = require('../service/booking')
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cinema_seat = require('../service/cinema_seat');
app.use(bodyParser.json());
const port = "4000";


app.post("/cinema_seat", async (req, res) => {
    try {
        const body = req.body;
        // const CinemaSeatID = utills.generateUUID();
        Object.assign(body, { CinemaSeatID: cinema_seat });
        const result = await cinema_seat.insertCinmea_Seat(body);
        return res.json(result);
    } catch (error) {
        return res.json({ status: 0, error: error });
    }
});

// app.post("/cinema_seat",async (req, res)=>{
//     try{
//         return res.json(await cinema_seat.insertCinmea_Seat(req.body))
//     }catch(error){
//         return{status:0,error:error}
//     }
// })

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------CRUD API'S-------------------------------------------------------------------------------------------------------
// GET request
app.get("/AllCinema_Seats", async (req, res) => {
    try {
        // Logic to fetch all CINEMA_SEAT
        const Cinema_Seat = await cinema_seat.getCinema_SeatList();
        return res.json({ status: 1, result: Cinema_Seat });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// get by ID:

// const getCinema_SeatByID = async (CinemaSeatID) => {
//     try {
//         const result = await cinema_seat.getCinema_SeatByID(CinemaSeatID);
//         return { status: 1, result: result };
//     } catch (error) {
//         return { status: 0, error: error.message };
//     }
// };
app.post("/get/Cinema_Seat/:CinemaSeatID", async (req, res) => {
    try {
        const result = await cinema_seat.getCinema_SeatByID(req.params.CinemaSeatID);
        return res.json({ status: 1, result: result });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});

// (async () => {
//     const CinemaSeatID = 2; // Provide the desired CinemaSeatID
//     const result = await getCinema_SeatByID(CinemaSeatID);
//     console.log(result.result.result);
// })();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Update By ID:

app.put("/update/Cinema_Seat:updateCinema_Seat", async (req, res) => {
    try {
        return res.json(await cinema_seat.updateCinema_Seat(req.params.CinemaSeatID, req.body));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});


// -------------------------------------------------------------DELETE BY ID -------------------------------------------------------------------------------------------------------------------------
// DELETE BY ID

app.delete("/delete/payment/:deleteCinema_Seat", async (req, res) => {
    try {
        return res.json(await cinema_seat.deleteCinema_Seat(req.params.CinemaSeatID));
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