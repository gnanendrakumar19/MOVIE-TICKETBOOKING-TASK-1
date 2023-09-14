const { body, param } = require('express-validator');

const addShows = () => {
    return [

        body('ShowsID').not().isEmpty().withMessage('ShowsID is required'),
        body('Date').not().isEmpty().withMessage('Date is required'),
        body('StartTime').not().isEmpty().withMessage('StartTime is required'),
        body('EndTime').not().isEmpty().withMessage('EndTime is required'),
        body('Shows_TheaterID').not().isEmpty().withMessage('Shows_TheaterID is required'),
        body('Shows_MovieID').not().isEmpty().withMessage('Shows_MovieID is required'),
    ]
};

const getShowById = () => {
    return [
        param('ShowID').isUUID().withMessage('Please enter a valid ID')
    ]
};

const updateShows = () => {
    return [
        body('ShowsID').not().isEmpty().withMessage('ShowsID is required'),
        body('Date').not().isEmpty().withMessage('Date is required'),
        body('StartTime').not().isEmpty().withMessage('StartTime is required'),
        body('EndTime').not().isEmpty().withMessage('EndTime is required'),
        body('Shows_TheaterID').not().isEmpty().withMessage('Shows_TheaterID is required'),
        body('Shows_MovieID').not().isEmpty().withMessage('Shows_MovieID is required'),
    ]
};

const deleteShows = () => {
    return [
        body('ShowsID').not().isEmpty().withMessage('ShowsID is required'),
        body('Date').not().isEmpty().withMessage('Date is required'),
        body('StartTime').not().isEmpty().withMessage('StartTime is required'),
        body('EndTime').not().isEmpty().withMessage('EndTime is required'),
        body('Shows_TheaterID').not().isEmpty().withMessage('Shows_TheaterID is required'),
        body('Shows_MovieID').not().isEmpty().withMessage('Shows_MovieID is required'),
    ]
};

module.exports = {
    addShows,
    getShowById,
    updateShows,
    deleteShows
}