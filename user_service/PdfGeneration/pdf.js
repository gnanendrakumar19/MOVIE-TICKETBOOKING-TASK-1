const Knex = require('knex');
const { Model } = require('objection');
const express = require('express');
const app = express();

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
                    from: 'PAYMENT.PaymentID',
                    to: 'BOOKING.BOOKING_PaymentID'
                }
            }
        };
    }
}

const getpayment = async (paymentID, res) => {
    try {
        const result = await Payment.query()
            .where('PaymentID', paymentID)
            .withGraphFetched('booking');

        let total = 0.00;
        let x = 220;

        if (result && result.payment) {
            const bookingID = result.payment.BookingID;
            const numberofseats = result.payment.NumberofSeats;
            const timestamp = result.payment.TimeStamp;
            const status = result.payment.Status;
            const booking_userid = result.payment.Booking_UserID;
            const booking_showid = result.payment.Booking_ShowID;
            const booking_paymentid = result.payment.BOOKING_PaymentID;

            const PDFDocument = require('pdfkit');
            const doc = new PDFDocument();

            // Instead of creating a file, we will generate the PDF and return it as the response
            const chunks = [];
            doc.on('data', (chunk) => chunks.push(chunk));
            doc.on('end', () => {
                const pdfBuffer = Buffer.concat(chunks);
                res.setHeader('Content-Length', pdfBuffer.length);
                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Disposition', 'attachment; filename=payment_bill.pdf');
                res.end(pdfBuffer);
            });

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

            if (result.payment.payment.length) {
                for (let i = 0; i < result.payment.payment.length; i++) {
                    const PaymentID = result.payment.payment[i].PaymentID;
                    const AmountNumber = result.payment.payment[i].AmountNumber;
                    const timestamp = result.payment.payment[i].TimeStamp;

                    doc.font('Helvetica').fontSize(10)
                        .text(`${PaymentID}                    ${AmountNumber}                           ${timestamp}`, 50, x);

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
        const response = await getpayment(PaymentID, res); // Pass 'res' object as an argument
        return res.json(response);
    } catch (error) {
        return res.json({ status: 0, result: error });
    }
});
