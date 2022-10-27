var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mohdshahbaz027@gmail.com',
        pass: 'qwdtgsyyagfejjej'
    }
});

var mailOptions = {
    from: 'mohdshahbaz027@gmail.com',
    to: 'mohdshahbaz010299@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});