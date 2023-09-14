// const PDFDocument = require('pdfkit');
// const mysql = require('mysql2');
// const fs = require('fs');

// Create a database connection
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Y18ACE482@ngk',
//     database: 'TICKET_BOOKING'
// });

// // Function to generate the PDF report
// function generatePaymentsReport() {
//     const doc = new PDFDocument();

//     // Set up the PDF document
//     doc.pipe(fs.createWriteStream('payments_report.pdf'));

//     // Define the query to retrieve payment data with relevant information from booking and user tables
//     const query = `
//     SELECT p.PaymentID, p.AmountNumber, p.TimeStamp, p.DiscountCoupon, p.RemoteTransactionID, p.PaymentMethod,
//       b.NumberOfSeats, b.TimeStamp AS BookingTimeStamp, u.Name AS UserName, u.Email, u.Phone
//     FROM PAYMENT p
//     JOIN BOOKING b ON p.Payment_BookingID = b.BookingID
//     JOIN USER u ON b.Booking_UserID = u.UserID
//   `;

//     // Execute the query
//     connection.query(query, (error, results) => {
//         if (error) {
//             console.error('Error retrieving payment data:', error);
//             doc.end();
//             return;
//         }

//         // Iterate over the payment data and add it to the PDF
//         results.forEach((payment) => {
//             doc.text(`Payment ID: ${payment.PaymentID}`);
//             doc.text(`Amount: $${payment.AmountNumber}`);
//             doc.text(`Timestamp: ${payment.TimeStamp}`);
//             doc.text(`Discount Coupon: ${payment.DiscountCoupon || 'N/A'}`);
//             doc.text(`Transaction ID: ${payment.RemoteTransactionID}`);
//             doc.text(`Payment Method: ${payment.PaymentMethod}`);
//             doc.text(`Number of Seats: ${payment.NumberOfSeats}`);
//             doc.text(`Booking Timestamp: ${payment.BookingTimeStamp}`);
//             doc.text(`User Name: ${payment.UserName}`);
//             doc.text(`Email: ${payment.Email}`);
//             doc.text(`Phone: ${payment.Phone}`);
//             doc.moveDown();
//         });

//         // Finalize and save the PDF document
//         doc.end();
//         console.log('PDF report generated successfully.');
//     });
// }

// // Call the function to generate the payments report
// generatePaymentsReport();











const PDFDocument = require('pdfkit');
const fs = require('fs');

// Function to generate the PDF receipt
function generatePaymentReceipt(paymentData, bookingData, userData) {
    const doc = new PDFDocument();

    // Set up the PDF document
    doc.pipe(fs.createWriteStream('payment_receipt.pdf'));
// 1
    // // Add the receipt title
    // doc.image("bill.png", 58, 54, { width: '20' })
    // doc.image("movieTime.png", 200, 0, { width: '200' })
    // doc.fontSize(18).text('Payment Receipt',{ align: 'center' });
    // doc.moveDown();
//2
    // doc.image('receipt2.png', 58, 54, { width: 20 });
    // doc.image('movieTime.png', 200, 0, { width: 200 });
    // doc.font('Helvetica-Bold').fontSize(18).fillColor('#FF8C00').text('Payment Receipt', { align: 'center' });
    // doc.moveDown();
//3
    // doc.image('receipt1.png', 58, 54, { width: 20 });
    // doc.image('movieTime.png', 200, 0, { width: 200 });
    // doc.font('Helvetica-Bold').fontSize(18).fillColor('#FF8C00').text('  Payment ', { align: 'center' });
    // doc.fillColor('black').text(' Receipt', { align: 'center' });
    // doc.moveDown();
//4
    // doc.image('receipt.png', 58,67, { rotate: 45, width: 20 });
    // doc.image('movieTime.png', 200, 0, { width: 200 });
    // doc.font('Helvetica-Bold').fontSize(18).fillColor('#FF8C00').text('  Payment ', { continued: true });
    // doc.fillColor('black').text('Receipt', { align: 'left' });
    // doc.moveDown();
//5
    doc.image('receipt.png', 58, 67, { rotate: 45, width: 20 });
    doc.image('movieTime.png', 200, 0, { width: 200 });
    doc.font('Helvetica-Bold').fontSize(18).fillColor('#FF8C00').text('  Payment ', { continued: true, underline: true });
    doc.fillColor('black').text('Receipt', { align: 'left' });
    doc.moveDown();


    // Add payment details
    doc.fontSize(12).text('Payment ID:', { continued: true, align: 'left' });
    doc.text(paymentData.PaymentID.toString(), { align: 'right' });
    doc.moveDown();

    doc.fontSize(12).text('Amount:', { continued: true, align: 'left' });
    doc.text(`$${paymentData.AmountNumber.toFixed(2)}`, { align: 'right' });
    doc.moveDown();

    doc.fontSize(12).text('Payment Date:', { continued: true, align: 'left' });
    doc.text(paymentData.TimeStamp.toString(), { align: 'right' });
    doc.moveDown();

    doc.fontSize(12).text('Discount Coupon:', { continued: true, align: 'left' });
    doc.text(paymentData.DiscountCoupon || 'N/A', { align: 'right' });
    doc.moveDown();

    doc.fontSize(12).text('Transaction ID:', { continued: true, align: 'left' });
    doc.text(paymentData.RemoteTransactionID, { align: 'right' });
    doc.moveDown();

    doc.fontSize(12).text('Payment Method:', { continued: true, align: 'left' });
    doc.text(paymentData.PaymentMethod, { align: 'right' });
    doc.moveDown();

    // Add booking details
    doc.fontSize(14).text('Booking Details', { align: 'center' });
    doc.moveDown();

    doc.fontSize(12).text('Movie:', { continued: true, align: 'left' });
    doc.text(bookingData.MovieName, { align: 'right' });
    doc.moveDown();

    doc.fontSize(12).text('Show Date:', { continued: true, align: 'left' });
    doc.text(bookingData.ShowDate.toString(), { align: 'right' });
    doc.moveDown();

    doc.fontSize(12).text('Show Time:', { continued: true, align: 'left' });
    doc.text(bookingData.ShowTime.toString(), { align: 'right' });
    doc.moveDown();

    doc.fontSize(12).text('Number of Seats:', { continued: true, align: 'left' });
    doc.text(bookingData.NumberOfSeats.toString(), { align: 'right' });
    doc.moveDown();

    // Add user details
    doc.fontSize(14).text('User Details', { align: 'center' });
    doc.moveDown();

    doc.fontSize(12).text('Name:', { continued: true, align: 'left' });
    doc.text(userData.Name, { align: 'right' });
    doc.moveDown();

    doc.fontSize(12).text('Email:', { continued: true, align: 'left' });
    doc.text(userData.Email, { align: 'right' });
    doc.moveDown();

    doc.fontSize(12).text('Phone:', { continued: true, align: 'left' });
    doc.text(userData.Phone, { align: 'right' });
    doc.moveDown();

    // Finalize and save the PDF document
    doc.end();
    console.log('Payment receipt generated successfully.');
}

// Example data for payment, booking, and user
const paymentData = {
    PaymentID: 1234,
    AmountNumber: 100,
    TimeStamp: new Date(),
    DiscountCoupon: 'ABC123',
    RemoteTransactionID: 'XYZ456',
    PaymentMethod: 'Credit Card'
};

const bookingData = {
    MovieName: 'Avengers: Endgame',
    ShowDate: new Date('2023-06-01'),
    ShowTime: '10:00 AM',
    NumberOfSeats: 2
};

const userData = {
    Name: 'John Doe',
    Email: 'johndoe@example.com',
    Phone: '1234567890'
};

// Generate the payment receipt with the provided data
generatePaymentReceipt(paymentData, bookingData, userData);
