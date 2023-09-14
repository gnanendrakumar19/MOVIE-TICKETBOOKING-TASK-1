const fs = require ("fs");
const PDFDocument = require("pdfkit");

function createInvoice(invoice, Bill) {
let doc = new PDFDocument({size: "A4", margin: 50});

    generateHeader(doc);
    generateCustomerInformation(doc, invoice);
    // generateInvoiceTable(doc, invoice);
    // generatesenderinformation(doc, invoice)
    // generateFooter(doc);

    doc.end();
    doc.pipe(fs.createWriteStream("Bill.pdf"));
}
createInvoice();
module.exports = {
    createInvoice
};

function generateHeader(doc) {
    doc
        .image("bill.png", 58, 54, { width: '40' })
        .image("movieTime.png", 200, 30, { width: '190' })
        .fillColor("#444444")
        .fontSize(10)
        .text("MovieTime.in", 250, 100)
        .fontSize(10)
        .text("Amazon Library", 200, 50, { align: "right" })
        .text("ebooks", 200, 65, { align: "right" })
        .text("amazonebooks.com", 200, 80, { align: "right" })
        .moveDown();
}

function generateCustomerInformation(doc, invoice) {
    doc
        .fillColor("#444444")
        .fontSize(20)
        .text("Invoice", 50, 160);
}
