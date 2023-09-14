const { body, param } = require('express-validator');

const addCinema_Seat = () => {
    return [
        body('CinemaSeatID').not().isEmpty().withMessage('CinemaSeatID is required'),
        body('SeatNumber').not().isEmpty().withMessage('SeatNumber is required'),
        body('Type').not().isEmpty().withMessage('Type is required'),
        body('CINEMA_SEAT_TheaterID').not().isEmpty().withMessage('CINEMA_SEAT_TheaterID is required')
    ]
};

const getCinema_SeatById = () => {
    return [
        param('CinemaSeatID').isUUID().withMessage('Please enter a valid ID')
    ]
};

const updateCinema_Seat = () => {
    return [
        body('CinemaSeatID').not().isEmpty().withMessage('CinemaSeatID is required'),
        body('SeatNumber').not().isEmpty().withMessage('SeatNumber is required'),
        body('Type').not().isEmpty().withMessage('Type is required'),
        body('CINEMA_SEAT_TheaterID').not().isEmpty().withMessage('CINEMA_SEAT_TheaterID is required')
    ]
};

const deleteCinema_Seat = () => {
    return [
        param('CinemaSeatID').isUUID().withMessage('Please enter a valid ID')
    ]
};

module.exports = {
    addCinema_Seat,
    getCinema_SeatById,
    updateCinema_Seat,
    deleteCinema_Seat
}
