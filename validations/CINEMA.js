const { body, param } = require('express-validator');

const addCinema = () => {
    return [
        body('CinemaID').not().isEmpty().withMessage('CinemaID is required'),
        body('Name').not().isEmpty().withMessage('Name is required'),
        body('TotalCinemaHalls').not().isEmpty().withMessage('TotalCinemaHalls is required'),
        body('CINEMA_CityID').not().isEmpty().withMessage('CINEMA_CityID is required')
    ]
};

const getCinemaById = () => {
    return [
        param('CinemaID').isUUID().withMessage('Please enter a valid ID')
    ]
};

const updateCinema = () => {
    return [
        body('CinemaID').not().isEmpty().withMessage('CinemaID is required'),
        body('Name').not().isEmpty().withMessage('Name is required'),
        body('TotalCinemaHalls').not().isEmpty().withMessage('TotalCinemaHalls is required'),
        body('CINEMA_CityID').not().isEmpty().withMessage('CINEMA_CityID is required')
    ]
};

const deleteCinema = () => {
    return [
        param('CinemaID').isUUID().withMessage('Please enter a valid ID')
    ]
};

module.exports = {
    addCinema,
    getCinemaById,
    updateCinema,
    deleteCinema
}
