const { body, param } = require('express-validator');

const addbookings = () => {
    return [
        body('BookingID').not().isEmpty().withMessage('BookingID is required'),
        body('NumberofSeats').not().isEmpty().withMessage('NumberofSeats is required'),
        body('TimeStamp').not().isEmpty().withMessage('TimeStamp is required'),
        body('Status').not().isEmpty().withMessage('Status is required'),
    ]
};

const getbookingssById = () => {
    return [
        param('ID').isUUID().withMessage('Please enter a valid ID')
    ]
};

const updatebookings = () => {
    return [
        body('BookingID').not().isEmpty().withMessage('BookingID is required'),
    ]
};

const deletebookings = () => {
    return [
        param('ID').isUUID().withMessage('Please enter a valid ID')
    ]
};

module.exports = {
    addbookings,
    getbookingssById,
    updatebookings,
    deletebookings
}
