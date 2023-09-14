var nodemailer = require('nodemailer');
smtpprotocol = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "gnanendrakumar19@gmail.com",
        pass: "xylysswqhjgfdihb"
    }
});

var mailOptions = {
    from: 'gnanendrakumar19@gmail.com',
    to: 'ngkyadav2000@gmail.com',
    subject: 'Ticket Booking paymentINVOICE',
    text: 'smtpmail',

    attachments: [
        {
            filename: 'paymentINVOICE.pdf',
            path: 'paymentINVOICE.pdf'
        },
    ]

}
smtpprotocol.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
        smtpprotocol.close();
    }
});