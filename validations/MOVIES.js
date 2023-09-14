const { body, param } = require('express-validator');

const addMovies = () => {
    return [

        body('MovieID').not().isEmpty().withMessage('MovieID is required'),
        body('Title').not().isEmpty().withMessage('Title is required'),
        body('Description').not().isEmpty().withMessage('Description is required'),
        body('Duration').not().isEmpty().withMessage('Duration is required'),
        body('Language').not().isEmpty().withMessage('Language is required'),
        body('ReleaseDate').not().isEmpty().withMessage('ReleaseDate is required'),
        body('Country').not().isEmpty().withMessage('Country is required'),
        body('Genre').not().isEmpty().withMessage('Genre is required'),

    ]
};

const getMovieById = () => {
    return [
        param('MovieID').isUUID().withMessage('Please enter a valid ID')
    ]
};

const updateMovie = () => {
    return [
        body('Name').not().isEmpty().withMessage('Movie Name is required'),
    ]
};

const deleteMovie = () => {
    return [
        param('MovieID').isUUID().withMessage('Please enter a valid ID')
    ]
};

module.exports = {
    addMovies,
    getMovieById,
    updateMovie,
    deleteMovie
}