const movies = require('../DATABASE/DB/movies')

let addMovies= async (body) => {
    try {
        result = await movies.insertMovie(body);
        if (result) {
            return { status: 1, result: "movie added successfully" }
        } else {
            return { status: 0, result: 'movie is not added' }
        }
    } catch (err) {
        return { status: 0, error: err.result };
    }
};

// (async () => {
//     const result = await addMovies({ "MovieID":"1","Title": "KANGUVA", "Description": "A Mighty Valient Saga", "Language":"Telugu,Tamil","Releasedate":"2024-01-13","Country":"INDIA","Genre":"3D Scifi"});
//     console.log(result);
// })();



// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Get All:

const getMoviesList = async () => {
    try {
        result = await movies.getMoviesList();
        return { status: 1, data: { MOVIES: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};
// ------------------------------------------------------GET BY ID -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//GET By ID

let getMoviesById = async (body) => {
    try {
        result = await movies.getMoviesById(body);
        return { status: 1, result: result };
        // return { status: 1, data: { MOVIES: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const MovieID = 123; // Provide the desired MovieID
//     const result = await getMoviesById(MovieID);
//     console.log(result);
// })();

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------Get By Name----------------------------------------------------------------------------------------------------------------------------------
// Get By Name
let getMovieByName = async (Name) => {
    try {
        result = await movies.getMovieByName(Name);
        return { status: 1, result: result };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const name = "vasu"; // Provide the desired name
//     const result = await getMovieByName(name);
//     console.log(result);
// })();

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Upadate By ID:

const updateMovies = async (MovieID, body) => {
    try {
        result = await movies.updateMovies(MovieID, body);
        return { status: 1, result: result = "record Updated" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const MovieID = "123"; // Provide the desired  MovieID
//     const body = { "Name": "vasu", "Password": "Dont4get", "Email": "vasuvas@gmail.com", "Phone": 7812222111 };
//     const result = await updateMovies(MovieID, body);
//     console.log(result);
// })();



// -------------------------------------------------------DELETE USER ------------------------------------------------------------------------------------------------------------------------------
// Delete User By ID

let deleteMovies = async (MovieID) => {
    try {
        result = await movies.deleteMovies(MovieID);
        return { status: 1, result: result = "record deleted" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async ()=>{
//     const MovieID = "B899004100174ECD9450106EFCFAECA7"; // Provide the desired MovieID
//     const result = await deleteMovies(MovieID);
//     console.log(result);
// })();


// ----------------------------------------------------------Delete By Name -----------------------------------------------------------------------------------------------------------------------------------------------
// DELETE BY NAME:

const deleteMoviesByName = async (Name) => {
    try {
        result = await movies.deleteMoviesByName(Name);
        return { status: 1, result: result = "deletedByName" };
    }
    catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async ()=>{
//     const Name = "NGK";
//     const result = await deleteMoviesByName(Name);
//     console.log(result);
// }) ();

module.exports = {
    addMovies: addMovies,
    getMoviesList: getMoviesList,
    getMoviesById: getMoviesById,
    getMovieByName: getMovieByName,
    updateMovies: updateMovies,
    deleteMovies: deleteMovies,
    deleteMoviesByName: deleteMoviesByName
}