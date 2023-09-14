const Movies = require("../MODEL/movies");

const insertMovie = async (body) => {
    return await Movies.query().insert(body);
};
const getMoviesList = async () => {
    return await Movies.query();
};
const getMoviesById = async (id) => {
    return await Movies.query();
};
const getMovieByName = async (id) => {
    return await Movies.query();
};
const updateMovies = async (id, body) => {
    return await Movies.query().patchAndFetchById(id, body);
};
const deleteMovies = async (id) => {
    return await Movies.query().deleteById(id);
};
const deleteMoviesByName = async (id) => {
    return await Movies.query().deleteById(id);
};
module.exports = {
    insertMovie: insertMovie,
    getMoviesList: getMoviesList,
    getMoviesById: getMoviesById,
    getMovieByName: getMovieByName,
    updateMovies: updateMovies,
    deleteMovies: deleteMovies,
    deleteMoviesByName: deleteMoviesByName

}