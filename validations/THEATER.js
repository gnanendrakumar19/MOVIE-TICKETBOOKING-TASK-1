const { body, param } = require('express-validator');

const addTheater = () => {
    return [

        body('TheaterID').not().isEmpty().withMessage('TheaterID is required'),
        body('Name').not().isEmpty().withMessage('Name is required'),
        body('TotalSeats').not().isEmpty().withMessage('TotalSeats is required'),
        body('TheaterCinemaID').not().isEmpty().withMessage('TheaterCinemaID is required'),
    ]
};

const getTheaterById = () => {
    return [
        param('TheaterID').isUUID().withMessage('Please enter a valid ID')
    ]
};

const updateMovie = () => {
    return [
        body('Name').not().isEmpty().withMessage('Movie Name is required'),
        body('TotalSeats').not().isEmpty().withMessage('TotalSeats is required'),
    ]
};

const deleteMovie = () => {
    return [
        param('TheaterID').isUUID().withMessage('Please enter a valid ID')
    ]
};

module.exports = {
    addTheater,
    getTheaterById,
    updateMovie,
    deleteMovie
}