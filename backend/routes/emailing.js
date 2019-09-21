const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');


let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
       user: '52ff0094c3f2f8',
       pass: 'ec30782c6f917b'
    }
});



router.get("/test", (req, res) => {

    const message = {
        from: 'test@test.test', // Sender address
        to: 'test@test.tester',         // List of recipients
        subject: 'Testing this test', // Subject line
        text: 'Happy Testing!!!' // Plain text body
    };
    transport.sendMail(message, function(err, info) {
        if (err) {
            res.send(err)
        } else {
            res.send(info)
        }
    });

  });


module.exports = router;