const { body, param } = require('express-validator');

let phoneValidation = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let passwordValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const add = () => {
    return [
        body('AdminID').not().isEmpty().withMessage('AdminID required').isLength({ max: 50 }).withMessage('AdminID maximum character limit is 25'),
        body('Name').trim().optional({ checkFalsy: true }).isLength({ max: 70 }).withMessage('Name maximum character limit is 25'),
        body('password').custom(password => {
            if (password && !(password.match(passwordValidation))) {
                throw new Error("Invalid password characters");
            } else
                if (password && password.length > 50) {
                    throw new Error('Validation is not matching. Use different password');
                }
            return true;
        }),

        body('email').custom(email => {

            if (email && !(email.match(emailValidation))) {
                throw new Error('Invalid email address');
            }
            else if (email && email.length > 60) {
                throw new Error('Email maximum character limit is 60');
            }
            return true;
        }),
        body('phone').custom(phone => {

            if (phone && !(phone.toString().match(phoneValidation))) {
                throw new Error('Invalid phone number')
            }
            return true
        })
    ]
};

const update = () => {
    return [
        body('AdminID').isUUID().withMessage('Please enter a valid ID'),
        body('Name').trim().optional({ checkFalsy: true }).isLength({ max: 50 }).withMessage('Name maximum character limit is 50'),
        body('password').trim().optional({ checkFalsy: true }).isLength({ max: 50 }).withMessage('password maximum character limit is 50'),
        body('email').custom(email => {

            if (email && !(email.match(emailValidation))) {
                throw new Error('Invalid email address');
            }
            else if (email && email.length > 60) {
                throw new Error('Email maximum character limit is 60');
            }
            return true;
        }),
        body('phone').custom(phone => {

            if (phone && !(phone.toString().match(phoneValidation))) {
                throw new Error('Invalid phone number')
            }
            return true
        })
    ]
};

const deleteById = () => {
    return [
        body('id').isUUID().withMessage('Please enter a valid ID')
    ]
};

module.exports = {
    add,
    update,
    deleteById
}