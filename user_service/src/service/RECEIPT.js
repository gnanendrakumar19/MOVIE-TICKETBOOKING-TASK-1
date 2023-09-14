const PDFDocument = require('pdfkit');
const fs = require('fs');

// Function to generate the PDF receipt
function generatePaymentReceipt() {
    const doc = new PDFDocument();

    // Set up the PDF document
    doc.pipe(fs.createWriteStream('receipt.pdf'));

    doc.image('bill.png', { rotate: 45, width: 20 });
    doc.image('movieTime.png', 200, 0, { width: 200 });
    doc.font('Helvetica-Bold').fontSize(18).fillColor('#FF8C00').text('  Payment ', { continued: true });
    doc.fillColor('black').text('Receipt', { align: 'left' });
    doc.moveDown();

    doc.end();
    console.log('Payment receipt generated successfully.');
}

// Generate the payment receipt with the provided data
generatePaymentReceipt();