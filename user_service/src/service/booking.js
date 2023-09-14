const booking = require('../database/db/booking')

let Booking = async (body) => {
    try {
        result = await booking.insertBooking(body);
        if (result) {
            return { status: 1, result: "Booked successfully" }
        } else {
            return { status: 0, result: 'Booking unsuccessfull' }
        }
    } catch (err) {
        return { status: 0, error: err.message };
    }
};


(async()=>{
    const result = await Booking({ "BookingID": "1", "NumberofSeats": '3', "Booking_UserID":"123","Booking_ShowID":"1" });
    console.log(result);
})()


// ------------------------------------------------------GET BY ID -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//GET By ID

let getBookingByID = async (body) => {
    try {
        result = await booking.getBookingByID(body);
        return { status: 1, result: result };
        // return { status: 1, data: { BOOKING: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const BookingID = 1; // Provide the desired user ID
//     const result = await getBookingByID(BookingID);
//     console.log(result);
// })();


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Upadate By ID:

const updateBooking = async (BookingID, body) => {
    try {
        result = await booking.updateBooking(BookingID, body);
        return { status: 1, result: result = "record Updated" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const BookingID = "1"; // Provide the desired  BookingID
//     const body = { "Name": "vasu", "Password": "Dont4get", "Email": "vasuvas@gmail.com", "Phone": 7812222111 };
//     const result = await updateBooking(BookingID, body);
//     console.log(result);
// })();

// -------------------------------------------------------DELETE USER ------------------------------------------------------------------------------------------------------------------------------
// Delete User

let deleteBooking = async (BookingID) => {
    try {
        result = await booking.deleteBooking(BookingID);
        return { status: 1, result: result = "record deleted" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async ()=>{
//     const BookingID = "B899004100174ECD9450106EFCFAECA7"; // Provide the desired UserID
//     const result = await deleteBooking(BookingID);
//     console.log(result);
// })();





module.exports = { Booking: Booking,
    getBookingByID: getBookingByID,
    updateBooking: updateBooking,
    deleteBooking: deleteBooking

}
