const Cinema_Seat = require("../Model/cinema_seat");

const insertCinema_Seat = async(body)=>{
    return await Cinema_Seat.query().insert(body);
};
const getCinema_SeatList = async () => {
    return await Cinema_Seat.query();
}
const getCinema_SeatByID = async (ID) => {
    return await Cinema_Seat.query().findById(ID);
};

const updateCinema_Seat = async (id, body) => {
    return await Cinema_Seat.query().patchAndFetchById(id, body);
};
const deleteCinema_Seat = async (id) => {
    return await Cinema_Seat.query().deleteById(id);
};

module.exports = {
    insertCinmea_Seat:insertCinema_Seat,
    getCinema_SeatList: getCinema_SeatList,
    getCinema_SeatByID: getCinema_SeatByID,
    updateCinema_Seat:updateCinema_Seat,
    deleteCinema_Seat: deleteCinema_Seat
};