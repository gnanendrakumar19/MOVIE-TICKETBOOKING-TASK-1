const payment = require('../database/db/payment')

let PAYMENT = async (body) => {
    try {
        result = await payment.insertPAYMENT(body);
        if (result) {
            return { status: 1, result: "payment successfull" }
        } else {
            return { status: 0, result: 'payment unsuccessfull' }
        }
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const result = await PAYMENT({ "PaymentID":"1", "AmountNumber":"250", "TimeStamp":"","DiscountCoupon":"","RemoteTransactionID":"","PaymentMethod":"","Payment_BookingID":""});
//     console.log(result);
// })();

// (async () => {
//     const result = await PAYMENT({ "PaymentID": "1", "AmountNumber": "250",  "RemoteTransactionID": "SDCSSC", "PaymentMethod": "ONLINE", "Payment_BookingID": "1" });
//     console.log(result);
// })();


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Get All Payments:

const getAllPayments = async () => {
    try {
        result = await payment.getAllPayments();
        return { status: 1, data: { PAYMENT: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// ------------------------------------------------------GET BY ID -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//GET By ID

let getPAYMENTByID = async (PaymentID) => {
    try {
        const result = await payment.getPAYMENTByID(PaymentID);
        return { status: 1, result: result };
        // return { status: 1, data: { PAYMENT: result } };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const PaymentID = 123; // Provide the desired PaymentID
//     const result = await getPAYMENTByID(PaymentID);
//     console.log(result);
// })();


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Update Payment:

const UpdatePAYMENT = async (PaymentID, body) => {
    try {
        result = await payment.updatePAYMENT(PaymentID, body);
        return { status: 1, result: result = "record Updated" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async () => {
//     const PaymentID = "1"; // Provide the desired  PaymentID
//     const body = { "Name": "vasu", "Password": "Dont4get", "Email": "vasuvas@gmail.com", "Phone": 7812222111 };
//     const result = await UpdatePAYMENT(PaymentID, body);
//     console.log(result);
// })();



// -------------------------------------------------------DELETE USER ------------------------------------------------------------------------------------------------------------------------------
// Delete User By ID

let deletePAYMENT = async (PaymentID) => {
    try {
        result = await payment.deletePAYMENT(PaymentID);
        return { status: 1, result: result = "record deleted" };
    } catch (err) {
        return { status: 0, error: err.message };
    }
};

// (async ()=>{
//     const PaymentID = ""; // Provide the desired PaymentID
//     const result = await deletePAYMENT(PaymentID);
//     console.log(result);
// })();





module.exports = {
    PAYMENT:PAYMENT,
    getAllPayments: getAllPayments,
    getPAYMENTByID: getPAYMENTByID,
    UpdatePAYMENT: UpdatePAYMENT,
    deletePAYMENT: deletePAYMENT
}