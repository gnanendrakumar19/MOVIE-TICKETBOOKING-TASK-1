const shows = require ('../DATABASE/DB/shows')

let Shows = async (body)=>{
    try {
        result = await shows.insertShows(body);
        if (result){
            return{status:1,result:"inserted successfully"}
        }else{
            return{status:0, result:'show is not inserted try agin to insert'}
        }
    }catch (err){
        return{status:0,error:err.message};
    }
};

// (async () => {
//     const result = await Shows({ "ShowID": '1', "Date":"2023-01-13" , "StartTime": "09:00:00", "EndTime": '02:30:00', "Shows_TheaterID": '1', "Shows_MovieID": '1' });
//     console.log(result);
// })()


// -----------------------------------------------------------GET ALL---------------------------------------------------------------------------------------------------------------------------------
//Get All:

const getShowsList = async () => {
    try {
        result = await shows.getShowsList();
        return { status: 1, data: { SHOWS: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};
// ------------------------------------------------------GET BY ID -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//GET By ID

let getShowById = async (body) => {
    try {
        result = await shows.getShowById(body);
        return { status: 1, result: result };
        // return { status: 1, data: { SHOWS: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const ShowID = 123; // Provide the desired ShowID
//     const result = await getShowById(ShowID);
//     console.log(result);
// })();

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Upadate By ID:

const updateShows = async (ShowID, body) => {
    try {
        result = await shows.updateShows(ShowID, body);
        return { status: 1, result: result = "record Updated" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const ShowID = "123"; // Provide the desired  ShowID
//     const body = { "Name": "vasu", "Password": "Dont4get", "Email": "vasuvas@gmail.com", "Phone": 7812222111 };
//     const result = await updateShows(ShowID, body);
//     console.log(result);
// })();



// -------------------------------------------------------DELETE shows ------------------------------------------------------------------------------------------------------------------------------
// Delete Shows By ID

let deleteShows = async (ShowID) => {
    try {
        result = await shows.deleteShows(ShowID);
        return { status: 1, result: result = "record deleted" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async ()=>{
//     const ShowID = "B899004100174ECD9450106EFCFAECA7"; // Provide the desired ShowID
//     const result = await deleteShows(ShowID);
//     console.log(result);
// })();




module.exports = {
    Shows:Shows,
    getShowsList: getShowsList,
    getShowById: getShowById,
    updateShows: updateShows,
    deleteShows: deleteShows,
}

