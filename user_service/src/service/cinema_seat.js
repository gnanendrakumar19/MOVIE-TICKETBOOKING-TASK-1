const cinema_seat = require('../database/db/cinema_seat')

let addCinema_Seat = async (body)=>{
    try{
        result = await cinema_seat.insertCinmea_Seat(body);
    if (result){
        return{status:1,result:"Cinema_Seat details added successfully"}
    } else{
        return{status:0,result:"Cinmea_Seat detils are noted added"}
    }
    } catch(err){
        return{status:0, error:err.message};
    }
};

(async () => {
    const result = await addCinema_Seat({ "CinemaSeatID": "", "SeatNumber": "", "Type": "", "CINEMA_SEAT_TheaterID": "" });
    console.log(result);
})();

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//getCinema_SeatList

const getCinema_SeatList = async () => {
    try {
        result = await cinema_seat.getCinema_SeatList();
        return { status: 1, data: { CINEMA_SEAT: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------GET BY ID -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//GET By ID

let getCinema_SeatByID = async (body) => {
    try {
        result = await cinema_seat.getCinema_SeatByID(body);
        return { status: 1, result: result };
        // return { status: 1, data: { CINEMA_SEAT: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const CinemaSeatID = 1; // Provide the desired CinemaSeatID
//     const result = await getCinema_SeatByID(CinemaSeatID);
//     console.log(result);
// })();

// -------------------------------------------------------UPDATE-----------------------------------------------------------------------------------------------------------------------------------------------

// Update Cinema_Seat:

const updateCinema_Seat = async (CinemaSeatID, body) => {
    try {
        result = await cinema_seat.updateCinema_Seat(CinemaSeatID, body);
        return { status: 1, result: result = "record Updated" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const CinemaSeatID = "1"; // Provide the desired  CinemaSeatID
//     const body = { "Name": "vasu", "Password": "Dont4get", "Email": "vasuvas@gmail.com", "Phone": 7812222111 };
//     const result = await updateCinema_Seat(CinemaSeatID, body);
//     console.log(result);
// })();

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------DELETE CINEMA_SEAT ------------------------------------------------------------------------------------------------------------------------------
// Delete User By ID

let deleteCinema_Seat = async (CinemaSeatID) => {
    try {
        result = await cinema_seat.deleteCinema_Seat(CinemaSeatID);
        return { status: 1, result: result = "record deleted" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async ()=>{
//     const CinemaSeatID = ""; // Provide the desired CinemaSeatID
//     const result = await deleteCinema_Seat(CinemaSeatID);
//     console.log(result);
// })();



module.exports = {
    addCinema_Seat:addCinema_Seat,
    getCinema_SeatList: getCinema_SeatList,
    getCinema_SeatByID: getCinema_SeatByID,
    updateCinema_Seat: updateCinema_Seat,
    deleteCinema_Seat: deleteCinema_Seat
}