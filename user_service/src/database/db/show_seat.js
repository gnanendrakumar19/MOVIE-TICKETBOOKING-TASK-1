const Show_Seat = require ("../Model/show_seat");

const insertShow_Seat = async(body)=>{
    return await Show_Seat.query().insert(body);
};
const getShow_Seat = async () => {
    return await Show_Seat.query();
}
const getShow_SeatByID = async (ID) => {
    return await Show_Seat.query().findById(ID);
};
const updateShow_Seat = async (id, body) => {
    return await Show_Seat.query().patchAndFetchById(id, body);
};
const deleteShow_Seat = async (id) => {
    return await Show_Seat.query().deleteById(id);
};

module.exports = {
    insertShow_Seat:insertShow_Seat,
    getShow_Seat: getShow_Seat,
    getShow_SeatByID: getShow_SeatByID,
    updateShow_Seat: updateShow_Seat,
    deleteShow_Seat: deleteShow_Seat

};