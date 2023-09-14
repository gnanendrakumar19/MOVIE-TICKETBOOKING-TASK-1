const { body, param } = require('express-validator');

const addPayment = () => {
    return [
        body('PaymentID').not().isEmpty().withMessage('PaymentID is required'),
        body('AmountNumber').not().isEmpty().withMessage('AmountNumber is required'),
        body('TimeStamp').not().isEmpty().withMessage('TimeStamp is required'),
        body('DiscountCoupon').not().isEmpty().withMessage('DiscountCoupon is required'),
        body('RemoteTransactionID').not().isEmpty().withMessage('RemoteTransactionID is required'),
        body('PaymentMethod').not().isEmpty().withMessage('PaymentMethod is required'),
        body('PAYMENT_BookingID').not().isEmpty().withMessage('PAYMENT_BookingID is required')
    ]
};

const getPaymentById = () => {
    return [
        param('PaymentID').isUUID().withMessage('Please enter a valid ID')
    ]
};

const updatePayment = () => {
    return [
        body('PaymentID').not().isEmpty().withMessage('PaymentID is required'),
        body('AmountNumber').not().isEmpty().withMessage('AmountNumber is required'),
        body('TimeStamp').not().isEmpty().withMessage('TimeStamp is required'),
        body('DiscountCoupon').not().isEmpty().withMessage('DiscountCoupon is required'),
        body('RemoteTransactionID').not().isEmpty().withMessage('RemoteTransactionID is required'),
        body('PaymentMethod').not().isEmpty().withMessage('PaymentMethod is required'),
        body('PAYMENT_BookingID').not().isEmpty().withMessage('PAYMENT_BookingID is required')
    ]
};

const deletePayment = () => {
    return [
        param('PaymentID').isUUID().withMessage('Please enter a valid ID')
    ]
};

module.exports = {
    addPayment,
    getPaymentById,
    updatePayment,
    deletePayment
}
