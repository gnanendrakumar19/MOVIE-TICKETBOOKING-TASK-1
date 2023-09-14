const PAYMENT = require("../Model/payment");

const insertPAYMENT = async (body) => {
    return await PAYMENT.query().insert(body);
};
const getAllPayments = async () => {
    return await PAYMENT.query();
}
const getPAYMENTByID = async (PaymentID) => {
    return await PAYMENT.query().where(PaymentID);
};
const updatePAYMENT = async (id, body) => {
    return await PAYMENT.query().patchAndFetchById(id, body);
};
const deletePAYMENT = async (id) => {
    return await PAYMENT.query().deleteById(id);
};

module.exports = {
    insertPAYMENT: insertPAYMENT,
    getAllPayments: getAllPayments,
    getPAYMENTByID: getPAYMENTByID,
    updatePAYMENT: updatePAYMENT,
    deletePAYMENT: deletePAYMENT
};