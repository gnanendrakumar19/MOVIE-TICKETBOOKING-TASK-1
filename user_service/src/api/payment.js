const utills = require('./utills')
const payment = require('../service/payment')
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = "4000";

app.post("/payment", async (req, res) => {
    try {
        const body = req.body;
        const paymentID = utills.generateUUID();
        Object.assign(body, { PaymentID: paymentID });
        const result = await payment.PAYMENT(body);
        return res.json(result);
    } catch (error) {
        return res.json({ status: 0, error: error });
    }
});


// app.post("/payment", async (req, res) => {
//     try {
//         return res.json(await payment.PAYMENT(req.body))
//     } catch (error) {
//         return { status: 0, error: error }
//     }
// })



// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------CRUD API'S-------------------------------------------------------------------------------------------------------
// GET request
app.get("/AllPayments", async (req, res) => {
    try {
        // Logic to fetch all payments
        const Payments = await payment.getAllPayments();
        return res.json({ status: 1, result: Payments });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// get by ID:

// const getPAYMENTByID = async (PaymentID) => {
//     try {
//         const result = await payment.getPAYMENTByID(PaymentID);
//         return { status: 1, result: result };
//     } catch (error) {
//         return { status: 0, error: error.message };
//     }
// };
app.post("/get/Payment/:PaymentID", async (req, res) => {
    try {
        const result = await payment.getPAYMENTByID(req.params.PaymentID);
        return res.json({ status: 1, result: result });
    } catch (error) {
        return res.json({ status: 0, error: error.message });
    }
});

// (async () => {
//     const PaymentID = 2; // Provide the desired PaymentID
//     const result = await getPAYMENTByID(PaymentID);
//     console.log(result.result);
// })();

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Update By ID:

app.put("/update/payment:PaymentID", async (req, res) => {
    try {
        return res.json(await user.UpdatePAYMENT(req.params.PaymentID, req.body));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});


// -------------------------------------------------------------DELETE BY ID -------------------------------------------------------------------------------------------------------------------------
// DELETE BY ID

app.delete("/delete/payment/:PaymentID", async (req, res) => {
    try {
        return res.json(await user.deletePAYMENT(req.params.PaymentID));
    } catch (error) {
        return res.json({ status: 0, error: error.message })
    }
});










app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`port running on ${port}`)
    }
});