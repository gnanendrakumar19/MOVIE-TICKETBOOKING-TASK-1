const theater = require('../DATABASE/DB/theater')

let addTheater = async (body) => {
    try {
        result = await theater.insertTheater(body);
        if (result) {
            return { status: 1, result: "Theater add successfull" }
        } else {
            return { status: 0, result: 'Theater add avvaledhu' }
        }
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const result = await addTheater({ "TheaterID":"1","Name": "veekshna", "TotalSeats": "90" });
//     console.log(result);
// })();




// -----------------------------------------------------------GET ALL---------------------------------------------------------------------------------------------------------------------------------
//Get All:

const getTheaterList = async () => {
    try {
        result = await theater.getTheaterList();
        return { status: 1, data: { THEATERS: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};
// ------------------------------------------------------GET BY ID -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//GET By ID

let getTheaterById = async (body) => {
    try {
        result = await theater.getTheaterById(body);
        return { status: 1, result: result };
        // return { status: 1, data: { THEATERS: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const TheaterID = 123; // Provide the desired TheaterID
//     const result = await getTheaterById(TheaterID);
//     console.log(result);
// })();

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Upadate By ID:

const updateTheater = async (TheaterID, body) => {
    try {
        result = await theater.updateTheater(TheaterID, body);
        return { status: 1, result: result = "record Updated" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const TheaterID = "123"; // Provide the desired  TheaterID
//     const body = { "Name": "vasu", "Password": "Dont4get", "Email": "vasuvas@gmail.com", "Phone": 7812222111 };
//     const result = await updateTheater(TheaterID, body);
//     console.log(result);
// })();



// -------------------------------------------------------DELETE shows ------------------------------------------------------------------------------------------------------------------------------
// Delete Shows By ID

let deleteTheater = async (TheaterID) => {
    try {
        result = await theater.deleteTheater(TheaterID);
        return { status: 1, result: result = "record deleted" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async ()=>{
//     const ShowID = "B899004100174ECD9450106EFCFAECA7"; // Provide the desired ShowID
//     const result = await deleteTheater(ShowID);
//     console.log(result);
// })();





module.exports = {
    addTheater: addTheater,
    getTheaterList: getTheaterList,
    getTheaterById: getTheaterById,
    updateTheater: updateTheater,
    deleteTheater: deleteTheater,
}