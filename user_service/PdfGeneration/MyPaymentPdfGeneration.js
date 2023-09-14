// const Knex = require ('knex')
// const knex = Knex({
//     client: "mysql2",
//     connection:{
//         host:"localhost",
//         user:"root",
//         password:"Y18ACE482@ngk",
//         database:"TICKET_BOOKING"
//     },
// });


// const{Model} = require("objection");
// Model.knex(knex)
// class Booking extends Model{
//     static get tableName(){
//         return 'BOOKING'
//     }
//     static get relationMappings(){
//         return{
//             payment:{
//                 relation: Model.HasManyRelation,
//                 modelClass:Payment,
//                 join:{
//                     from: "BOOKING.BookingID",
//                     to: "PAYMENT.PAYMENT_BookingID"
//                 },
//             },
//         };
//     }
// }

// // class Payment extends Model {
// //     static get tableName() {
// //         return 'PAYMENT'; // Replace with the actual table name
// //     }
// // }


// class Payment extends Model{
//     static get tableName(){
//         return 'PAYMENT'
//     }
//     static get relationMappings(){
//         return{
//             booking:{
//                 relation:Model.BelongsToOneRelation,
//                 modelClass:Booking,
//                 join:{
//                     from: "PAYMENT.PaymentID",
//                     to: "BOOKING.BOOKING_PaymentID"
//                 },
//             },
//         }
//     }
// }

// // ----CONSOLE 1 ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Booking.query()
// //     .withGraphFetched('payment')
// //     .where('BookingID', 1)
// //     .then(Payment => console.log(Payment[0]))
// //     .catch(error => console.log(error.message));


// // --------.2nd type of console-----------------------------------------------------------------------------------------------------------------------------------------------------

// // const getPayment = async () => {
// //     return await Booking.query()
// //                         .withGraphFetched('payment')
// //                         .where('BookingID', 1)
// //                         .first()
// // }
// // getPayment()
// //     .then((payment) => console.log(payment))
// //     .catch((error) => console.log(error.message));

// // -------console 2---------------------------------------------------------------------------------------------------------------------------------------------

// // Payment.query()
// //     .withGraphFetched('booking')
// //     .where('PaymentID',1)
// //     .then(booking => console.log(booking[0]))
// //     .catch(error => console.log(error.message));


// const getpayment = async (PaymenID) => {
//     try {
//         const result = await Payment.query()
//         .findById(PaymenID)
//         .withGraphFetched('booking');
        
//         let total = 0.00;
//         let x = 220;

//         if (result) {
//             const bookingID = result.BookingID;
//             const numberofseats = result.NumberofSeats;
//             const timestamp = result.TimeStamp;
//             const status = result.Status;
//             const booking_userid = result.BOOKING_UserID;
//             const booking_showid = result.BOOKING_ShowID;
//             const booking_paymentid = result.BOOKING_PaymentID
//             const PDFDocument = require('pdfkit');
//             const fs = require('fs');
//             const doc = new PDFDocument();
//             const outputStream = fs.createWriteStream('payment_bill1.pdf');
//             doc.pipe(outputStream);
//             doc.font('Helvetica-Bold').fontSize(20).text('Payment Bill', { align: 'center' });
//             doc.font('Helvetica').fontSize(12)
//                 .text(`BookingID: ${bookingID} `, 50, 100)
//                 .text(`NumberofSeats: ${numberofseats}`, 50, 120)
//                 .text(`TimeStamp: ${timestamp}`, 50, 140)
//                 .text(`Status: ${status}`, 50, 160)
//                 .text(`BOOKING_UserID: ${booking_userid}`, 50, 160)
//                 .text(`BOOKING_ShowID: ${booking_showid}`, 50, 160)
//                 .text(`BOOKING_PaymentID: ${booking_paymentid}`, 50, 160);
//             doc.font('Helvetica').fontSize(12)
//                 .text(`PaymentID     AmountNumber                 Timestamp`, 30, 200)
//             for (let i = 0; i < result.payment.length; i++) {
//                 const PaymentID = result.payment[i].PaymentID;
//                 const AmountNumber = result.payment[i].AmountNumber;
//                 const timestamp = result.payment[i].timestamp;
//                 const DiscountCoupon = result.payment[i].DiscountCoupon;
//                 const RemoteTransactionID = result.payment[i].RemoteTransactionID;
//                 const PaymentMethod = result.payment[i].PaymentMethod;
//                 const PAYMENT_BookingID = result.payment[i].PAYMENT_BookingID;
//                 doc.font('Helvetica').fontSize(10)
//                     .text(`${PaymentID}                    ${AmountNumber}                           ${timestamp}      ${DiscountCoupon}        ${RemoteTransactionID}              ${PaymentMethod}        ${PAYMENT_BookingID}`, 50, x)
//                 x += 20;
//                 total += 5000.00;
//             }
//             doc.font('Helvetica').fontSize(15)
//                 .text(`Totalpaid :${total}`, 50, x + 40)
//             doc.end();
//             return { status: 1, result: 'Payment bill PDF created successfully.' }
//         }
//     } catch (error) {
//         return { status: 0, result: err }
//     }
// }
// const express = require('express');
// const app = express();
// app.use(express.json());
// app.listen('4000', (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('connected!')
//     }
// })
// app.get("/payment", async (req, res) => {
//     try {
//         return res.json(await getpayment(req.body.PaymenID))
//     } catch (error) {
//         return { status: 0, result: error }
//     }
// })





























// const Knex = require('knex');
// const knex = Knex({
//     client: 'mysql2',
//     connection: {
//         host: 'localhost',
//         user: 'root',
//         password: 'Y18ACE482@ngk',
//         database: 'TICKET_BOOKING'
//     },
// });

// const { Model } = require('objection');
// Model.knex(knex);

// class Booking extends Model {
//     static get tableName() {
//         return 'BOOKING';
//     }

//     static get relationMappings() {
//         return {
//             payment: {
//                 relation: Model.HasManyRelation,
//                 modelClass: Payment,
//                 join: {
//                     from: 'BOOKING.BookingID',
//                     to: 'PAYMENT.PAYMENT_BookingID'
//                 }
//             }
//         };
//     }
// }

// class Payment extends Model {
//     static get tableName() {
//         return 'PAYMENT';
//     }

//     static get idColumn() {
//         return 'PaymentID'; // Specify the correct primary key column name here
//     }

//     static get relationMappings() {
//         return {
//             booking: {
//                 relation: Model.BelongsToOneRelation,
//                 modelClass: Booking,
//                 join: {
//                     from: 'PAYMENT.PaymentID',
//                     to: 'BOOKING.BOOKING_PaymentID'
//                 }
//             }
//         };
//     }
// }

// // Rest of the code remains the same...

// const getpayment = async (PaymentID) => {
//     try {
//         const result = await Payment.query()
//             .findById(PaymentID)
//             .withGraphFetched('booking');

//         let total = 0.00;
//         let x = 220;

//         if (result) {
//             const bookingID = result.booking.BookingID;
//             const numberofseats = result.booking.NumberofSeats;
//             const timestamp = result.booking.TimeStamp;
//             const status = result.booking.Status;
//             const booking_userid = result.booking.Booking_UserID;
//             const booking_showid = result.booking.Booking_ShowID;
//             const booking_paymentid = result.booking.BOOKING_PaymentID;

//             const PDFDocument = require('pdfkit');
//             const fs = require('fs');
//             const doc = new PDFDocument();
//             const outputStream = fs.createWriteStream('payment_bill1.pdf');
//             doc.pipe(outputStream);

//             doc.font('Helvetica-Bold').fontSize(20).text('Payment Bill', { align: 'center' });
//             doc.font('Helvetica').fontSize(12)
//                 .text(`BookingID: ${bookingID} `, 50, 100)
//                 .text(`NumberofSeats: ${numberofseats}`, 50, 120)
//                 .text(`TimeStamp: ${timestamp}`, 50, 140)
//                 .text(`Status: ${status}`, 50, 160)
//                 .text(`BOOKING_UserID: ${booking_userid}`, 50, 160)
//                 .text(`BOOKING_ShowID: ${booking_showid}`, 50, 160)
//                 .text(`BOOKING_PaymentID: ${booking_paymentid}`, 50, 160);

//             doc.font('Helvetica').fontSize(12)
//                 .text(`PaymentID     AmountNumber                 Timestamp`, 30, 200);

//             for (let i = 0; i < result.booking.payment.length; i++) {
//                 const PaymentID = result.booking.payment[i].PaymentID;
//                 const AmountNumber = result.booking.payment[i].AmountNumber;
//                 const timestamp = result.booking.payment[i].TimeStamp;
//                 const DiscountCoupon = result.booking.payment[i].DiscountCoupon;
//                 const RemoteTransactionID = result.booking.payment[i].RemoteTransactionID;
//                 const PaymentMethod = result.booking.payment[i].PaymentMethod;
//                 const PAYMENT_BookingID = result.booking.payment[i].PAYMENT_BookingID;

//                 doc.font('Helvetica').fontSize(10)
//                     .text(`${PaymentID}                    ${AmountNumber}                           ${timestamp}      ${DiscountCoupon}        ${RemoteTransactionID}              ${PaymentMethod}        ${PAYMENT_BookingID}`, 50, x);

//                 x += 20;
//                 total += AmountNumber;
//             }

//             doc.font('Helvetica').fontSize(15)
//                 .text(`Total paid: ${total}`, 50, x + 40);

//             doc.end();

//             return { status: 1, result: 'Payment bill PDF created successfully.' };
//         }
//     } catch (error) {
//         return { status: 0, result: error.message };
//     }
// };

// const express = require('express');
// const app = express();

// app.use(express.json());

// app.listen('4000', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('connected!');
//     }
// });

// app.get('/payment', async (req, res) => {
//     try {
//         const { PaymentID } = req.query;
//         const response = await getpayment(PaymentID);
//         return res.json(response);
//     } catch (error) {
//         return res.json({ status: 0, result: error });
//     }
// });












const Knex = require('knex');
const { Model } = require('objection');

const knex = Knex({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'Y18ACE482@ngk',
        database: 'TICKET_BOOKING'
    },
});

Model.knex(knex);

class Booking extends Model {
    static get tableName() {
        return 'BOOKING';
    }

    static get relationMappings() {
        return {
            payment: {
                relation: Model.HasManyRelation,
                modelClass: Payment,
                join: {
                    from: 'BOOKING.BookingID',
                    to: 'PAYMENT.PAYMENT_BookingID'
                }
            }
        };
    }
}

class Payment extends Model {
    static get tableName() {
        return 'PAYMENT';
    }

    static get relationMappings() {
        return {
            booking: {
                relation: Model.BelongsToOneRelation,
                modelClass: Booking,
                join: {
                    from: 'PAYMENT.PAYMENT_BookingID',
                    to: 'BOOKING.BookingID'
                }
            }
        };
    }
}

const getpayment = async (PaymentID) => {
    try {
        const result = await Payment.query()
            .where('PaymentID', PaymentID)
            .withGraphFetched('booking');

        let total = 0.00;
        let x = 220;

        if (result && result.booking && result.booking.payment) {
            const bookingID = result.booking.BookingID;
            const numberofseats = result.booking.NumberofSeats;
            const timestamp = result.booking.TimeStamp;
            const status = result.booking.Status;
            const booking_userid = result.booking.Booking_UserID;
            const booking_showid = result.booking.Booking_ShowID;
            const booking_paymentid = result.booking.BOOKING_PaymentID;

            const PDFDocument = require('pdfkit');
            const fs = require('fs');
            const doc = new PDFDocument();
            const outputStream = fs.createWriteStream('payment_bill.pdf');
            doc.pipe(outputStream);

            doc.font('Helvetica-Bold').fontSize(20).text('Payment Bill', { align: 'center' });
            doc.font('Helvetica').fontSize(12)
                .text(`BookingID: ${bookingID} `, 50, 100)
                .text(`NumberofSeats: ${numberofseats}`, 50, 120)
                .text(`TimeStamp: ${timestamp}`, 50, 140)
                .text(`Status: ${status}`, 50, 160)
                .text(`Booking_UserID: ${booking_userid}`, 50, 180)
                .text(`Booking_ShowID: ${booking_showid}`, 50, 200)
                .text(`BOOKING_PaymentID: ${booking_paymentid}`, 50, 220);

            doc.font('Helvetica').fontSize(12)
                .text(`PaymentID     AmountNumber                 Timestamp`, 30, 260);

            if (result.booking.payment.length) {
                for (let i = 0; i < result.booking.payment.length; i++) {
                    const PaymentID = result.booking.payment[i].PaymentID;
                    const AmountNumber = result.booking.payment[i].AmountNumber;
                    const timestamp = result.booking.payment[i].TimeStamp;
                    const DiscountCoupon = result.booking.payment[i].DiscountCoupon;
                    const RemoteTransactionID = result.booking.payment[i].RemoteTransactionID;
                    const PaymentMethod = result.booking.payment[i].PaymentMethod;
                    const PAYMENT_BookingID = result.booking.payment[i].PAYMENT_BookingID;

                    doc.font('Helvetica').fontSize(10)
                        .text(`${PaymentID}                    ${AmountNumber}                           ${timestamp}      ${DiscountCoupon}        ${RemoteTransactionID}              ${PaymentMethod}        ${PAYMENT_BookingID}`, 50, x);

                    x += 20;
                    total += AmountNumber;
                }
            }

            doc.font('Helvetica').fontSize(15)
                .text(`Total paid: ${total}`, 50, x + 40);

            doc.end();

            return { status: 1, result: 'Payment bill PDF created successfully.' };
        } else {
            return { status: 0, result: 'No payment information found.' };
        }
    } catch (error) {
        return { status: 0, result: error.message };
    }
};

const express = require('express');
const app = express();

app.use(express.json());

app.listen('4000', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected!');
    }
});

app.get('/payment', async (req, res) => {
    try {
        const { PaymentID } = req.query;
        const response = await getpayment(PaymentID);
        return res.json(response);
    } catch (error) {
        return res.json({ status: 0, result: error });
    }
});
