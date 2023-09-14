const { body, param } = require('express-validator');

const addShow_Seat = () => {
    return [
        body('ShowSeatID').not().isEmpty().withMessage('ShowSeatID is required'),
        body('Status').not().isEmpty().withMessage('Status is required'),
        body('Price').not().isEmpty().withMessage('Price is required'),
        body('SHOW_SEAT_CinemaSeatID').not().isEmpty().withMessage('SHOW_SEAT_CinemaSeatID is required'),
        body('SHOW_SEAT_ShowID').not().isEmpty().withMessage('SHOW_SEAT_ShowID is required'),
        body('SHOW_SEAT_BookingID').not().isEmpty().withMessage('SHOW_SEAT_BookingID is required')
    ]
};

const getShow_SeatById = () => {
    return [
        param('ShowSeatID').isUUID().withMessage('Please enter a valid ID')
    ]
};

const updateShow_Seat = () => {
    return [
        body('ShowSeatID').not().isEmpty().withMessage('ShowSeatID is required'),
        body('Status').not().isEmpty().withMessage('Status is required'),
        body('Price').not().isEmpty().withMessage('Price is required'),
        body('SHOW_SEAT_CinemaSeatID').not().isEmpty().withMessage('SHOW_SEAT_CinemaSeatID is required'),
        body('SHOW_SEAT_ShowID').not().isEmpty().withMessage('SHOW_SEAT_ShowID is required'),
        body('SHOW_SEAT_BookingID').not().isEmpty().withMessage('SHOW_SEAT_BookingID is required')
    ]
};

const deleteShow_Seat = () => {
    return [
        param('ShowSeatID').isUUID().withMessage('Please enter a valid ID')
    ]
};

module.exports = {
    addShow_Seat,
    getShow_SeatById,
    updateShow_Seat,
    deleteShow_Seat
}