const {body,param} =require('express-validator')


// validation-1
// let phoneValidation = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
// let emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// let passwordValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// validation-2
let phoneValidation = /^\+(?:[0-9]){1,3}\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let emailValidation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*(?:\.com|\.outlook|\.in)$/i;
// let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{8,}$/;
let passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9.!@#$%^&*]{8,}$/;


// // Example usage
// let phoneNumber = "+911234567890";
// let email = "example@example.com";
// let password = "";

// console.log(phoneValidation.test(phoneNumber));   // true
// console.log(emailValidation.test(email));         // true
// console.log(passwordValidation.test(password));   // true



const signUpValidation =()=>{
    return [
        body("Name")    .not().isEmpty().trim().isLength({min:1,max:70}).withMessage("Name is required"),
        body("Password").not().isEmpty().trim().isLength({ min: 1, max: 70 }).withMessage("name is required")
                                        .isLength({max:20}).withMessage('Password maxmimum limit is 20')
                                        .matches(passwordValidation).withMessage("invalid Password characteristics"),
        body("Email")   .not().isEmpty().withMessage("Email is required")
                                        .isLength({max:50}).withMessage('email maximum charecter limit is 50')
                                        .matches(emailValidation).withMessage("Invalid email address"),
        body("Phone")   .not().isEmpty().trim().isLength({ min: 1, max: 70 }).withMessage("Phone Number  is required")
                                        .isLength({ max: 10 }).withMessage('Phone Number maximum charecter limit is 10')
                                        .matches(phoneValidation).withMessage("Invalid Phone Number "),

    ];
};

module.exports = {
    signUpValidation: signUpValidation,

}






























































// const add = () => {
//     return [
//         // body('UserID').not().isEmpty().withMessage('UserID required').isLength({ max: 50 }).withMessage('UserID maximum character limit is 25'),
//         body('Name').trim().optional({ checkFalsy: true }).isLength({ max: 70 }).withMessage('Name maximum character limit is 25'),
//         body('password').custom(password =>{
//             if (password && !(password.match(passwordValidation))){
//                 throw new Error("Invalid password characters");
//             }else
//             if (password && password.length> 2)
//             {
//                 throw new Error('Validation is not matching use different password');
//             }
//             return true;
//         }),

//         body('email').custom(email => {

//             if (email && !(email.match(emailValidation))) {
//                 throw new Error('Invalid email address');
//             }
//             else if (email && email.length > 60) {
//                 throw new Error('Email maximum character limit is 60');
//             }
//             return true;
//         }),
//         body('phone').custom(phone => {
//             if (phone && !(phone.toString().match(phoneValidation))) {
//                 throw new Error('Invalid phone number')
//             }
//             return true
//         })
//     ]
// };




// const update = () => {
//     return [
//         body('UserID').isUUID().withMessage('Please enter a valid ID'),
//         body('Name').trim().optional({ checkFalsy: true }).isLength({ max: 50 }).withMessage('Name maximum character limit is 50'),
//         body('password').trim().optional({ checkFalsy: true }).isLength({ max: 50 }).withMessage('password maximum character limit is 50'),
//         body('email').custom(email => {

//             if (email && !(email.match(emailValidation))) {
//                 throw new Error('Invalid email address');
//             }
//             else if (email && email.length > 60) {
//                 throw new Error('Email maximum character limit is 60');
//             }
//             return true;
//         }),
//         body('phone').custom(phone => {

//             if (phone && !(phone.toString().match(phoneValidation))) {
//                 throw new Error('Invalid phone number')
//             }
//             return true
//         })
//     ]
// };




// const deleteById = () => {
//     return [
//         body('id').isUUID().withMessage('Please enter a valid ID')
//     ]
// };

