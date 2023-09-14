const show_seat = require('../database/db/show_seat')

let Show_Seat = async (body) => {
    try {
        result = await show_seat.insertShow_Seat(body);
        if (result) {
            return { status: 1, result: "your Show_Seat is alloted " }
        } else {
            return { status: 0, result: 'your Show_Seat is not alloted please check your details once again' }
        }
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async()=>{
//     const result = await Show_Seat({ "ShowSeatID": '', "Status": '', "Price": "", "SHOW_SEAT_CinemaSeatID":"", "SHOW_SEAT_ShowID":"", "SHOW_SEAT_BookingID":""});
//     console.log(result);
// })()

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Get All:

const getShow_Seat = async () => {
    try {
        result = await show_seat.getShow_Seat();
        return { status: 1, data: { SHOW_SEAT: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// ------------------------------------------------------GET BY ID -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//GET By ID

let getShow_SeatByID = async (body) => {
    try {
        result = await show_seat.getShow_SeatByID(body);
        return { status: 1, result: result };
        // return { status: 1, data: { SHOW_SEAT: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const ShowSeatID = 1; // Provide the desired ShowSeatID
//     const result = await getShow_SeatByID(ShowSeatID);
//     console.log(result);
// })();


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Upadate By ID:

const updateShow_Seat = async (ShowSeatID, body) => {
    try {
        result = await show_seat.updateShow_Seat(ShowSeatID, body);
        return { status: 1, result: result = "record Updated" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const ShowSeatID = "123"; // Provide the desired  ShowSeatID
//     const body = { "Name": "vasu", "Password": "Dont4get", "Email": "vasuvas@gmail.com", "Phone": 7812222111 };
//     const result = await updateShow_Seat(ShowSeatID, body);
//     console.log(result);
// })();



// -------------------------------------------------------DELETE USER ------------------------------------------------------------------------------------------------------------------------------
// Delete User By ID

let deleteShow_Seat = async (ShowSeatID) => {
    try {
        result = await show_seat.deleteShow_Seat(ShowSeatID);
        return { status: 1, result: result = "record deleted" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async ()=>{
//     const ShowSeatID = ""; // Provide the desired ShowSeatID
//     const result = await deleteShow_Seat(ShowSeatID);
//     console.log(result);
// })();




module.exports = {
    Show_Seat:Show_Seat,
    getShow_Seat: getShow_Seat,
    getShow_SeatByID: getShow_SeatByID,
    updateShow_Seat: updateShow_Seat,
    deleteShow_Seat: deleteShow_Seat

}