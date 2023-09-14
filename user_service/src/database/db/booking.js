const Booking = require("../Model/booking");

const insertBooking = async (body) => {
    return await Booking.query().insert(body);
};

const getBookingList = async()=>{
    return await Booking.query();
};

const getBookingByID = async(ID)=>{
    return await Booking.query().findById(ID);
};


const updateBooking = async (id,body)=>{
    return await Booking.query().patchAndFetchById(id,body);
};

const deleteBooking = async (id) =>{
    return await Booking.query().deleteById(id);
};
const show = async(body)=>{
     return await   Booking.query()
                        .withGraphFetched('Show')
                        .where(body)
}
// (async()=>{
//     const result =await show({"BookingID":1})
//     console.log(result)

// })()









// User.query()
//     .withGraphFetched('Booking')
//     .where('UserID',123)
//     .then(Booking => console.log(Booking[0]))
//     .catch(error => console.log(error.message));
module.exports = {
    insertBooking:insertBooking,
    getBookingList:getBookingList,
    getBookingByID: getBookingByID,
    updateBooking: updateBooking,
    deleteBooking: deleteBooking
};