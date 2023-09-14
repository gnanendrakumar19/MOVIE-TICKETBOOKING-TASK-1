const cinema = require('../DATABASE/DB/cinema')
// const Admin = require('../DATABASE/MODEL/admin')

let addCinema = async (body) => {
    try {
        result = await cinema.insertCinema(body);
        if (result) {
            return { status: 1, result: "cinema details inserted" }
        } else {
            return { status: 0, result: 'cinema is not added' }
        }
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const result = await addCinema({ "CinemaID":"1","Name": "KANGUVA", "TotalCinemaHalls": "3", "CINEMA_CityID":"1" });
//     console.log(result);
// })();

// (async () => {
//     const result = await addCinema({ "CinemaID": "2", "Name": "JAPAN", "TotalCinemaHalls": "3", "CINEMA_CityID": "1" });
//     console.log(result);
// })();

// (async () => {
//     const result = await addCinema({ "CinemaID": "3", "Name": "LEO", "TotalCinemaHalls": "3", "CINEMA_CityID": "1" });
//     console.log(result);
// })();




// -------------------------------------------------------------GET ALL-------------------------------------------------------------------------------------------------------------------------------
//Get All:

const getCinemaList = async () => {
    try {
        result = await cinema.getCinemaList();
        return { status: 1, data: { CINEMA: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// ------------------------------------------------------GET BY ID -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//GET By ID

let getCinemaById = async (CinemaID) => {
    try {
        result = await cinema.getCinemaById(CinemaID);
        return { status: 1, result: result };
        // return { status: 1, data: { CINEMA: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const CinemaID = 1; // Provide the desired CinemaID
//     const result = await getCinemaById(CinemaID);
//     console.log(result);
// })();


// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Upadate By ID:

const updateCinema = async (CinemaID, body) => {
    try {
        result = await cinema.updateCinema(CinemaID, body);
        return { status: 1, result: result = "record Updated" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const CinemaID = "123"; // Provide the desired  CinemaID
//     const body = { "Name": "vasu", "Password": "Dont4get", "Email": "vasuvas@gmail.com", "Phone": 7812222111 };
//     const result = await updateCinema(CinemaID, body);
//     console.log(result);
// })();


// -------------------------------------------------------DELETE USER ------------------------------------------------------------------------------------------------------------------------------
// Delete User By ID

let deleteCinema = async (CinemaID) => {
    try {
        result = await cinema.deleteCinema(CinemaID);
        return { status: 1, result: result = "record deleted" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async ()=>{
//     const CinemaID = "B899004100174ECD9450106EFCFAECA7"; // Provide the desired CinemaID
//     const result = await deleteCinema(CinemaID);
//     console.log(result);
// })();




// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//ORM:


let getCinema = async (body) => {
    try {
        result = await cinema.cinema(body)
        if (result) {
            return { status: 1, result: result }
        } else {
            return { status: 0, result: "no cinema available" }
        }
    } catch (error) {
        return { status: 0, result: error }

    }
}

// (async () => {
//     const result = await getCinema({"CinemaId":1});
//     console.log(result);
// })();









module.exports = {
    addCinema: addCinema,
    getCinemaList: getCinemaList,
    getCinemaById: getCinemaById,
    updateCinema: updateCinema,
    deleteCinema: deleteCinema,
    getCinema: getCinema,
}