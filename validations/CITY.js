const { body, param } = require('express-validator');

const addCity = () => {
    return [

        body('CityID').not().isEmpty().withMessage('City name is required'),
        body('Name').not().isEmpty().withMessage('Name is required'),
        body('State').not().isEmpty().withMessage('State is required'),
        body('Zipcode').not().isEmpty().withMessage('Zipcode is required'),

    ]
};

const getcityById = () => {
    return [
        param('CityID').isUUID().withMessage('Please enter a valid ID')
    ]
};

const updatecity = () => {
    return [
        body('Name').not().isEmpty().withMessage('City Name is required'),
    ]
};

const deletecity = () => {
    return [
        param('CityID').isUUID().withMessage('Please enter a valid ID')
    ]
};

module.exports = {
    addCity,
    getcityById,
    updatecity,
    deletecity
}