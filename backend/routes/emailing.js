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


function makeEmail(resources){

    var body="Hello,<br><br> Thank you for requesting a personalized resource and referral guide. Here are the items you requested:<br><br>"
    resources.forEach(function (resource) {
        body += "<strong>" +resource["title"]+"</strong><br>"
        body += "&emsp; - " +resource["description"]+"<br>"
        body += "&emsp; - <a href=\"" +resource["link"]+ "\">Learn More</a><br><br>"
    });

    body+="Best regards,<br><br>Chicago Children's Advocacy Center<br> 1240 S. Damen Ave.<br> Chicago, IL 60608<br> (312) 492-3700<br>"
    return body;
}

router.post("/sendEmail", (req, res) => {
    let req_obj = JSON.parse(JSON.stringify(req.body));
    let body = makeEmail(req_obj.resources);
    let recipient = req_obj.email;

    const message = {
        from: 'test@test.test', // Sender address
        to: recipient,         // List of recipients
        subject: 'Resources from Chicago Children Advocacy Center', // Subject line
        html: body // Plain text body
    };
    transport.sendMail(message, function(err, info) {
        if (err) {
            res.send(err)
        } else {
            res.send(info)
        }
    });

  });

// router.get("/sendEmail", (req, res) => {
//     let m = makeEmail(resources)
//     const message = {
//         from: 'test@test.test', // Sender address
//         to: 'test@test.tester',         // List of recipients
//         subject: 'Testing this test', // Subject line
//         text: m // Plain text body
//     };
//     transport.sendMail(message, function(err, info) {
//         if (err) {
//             res.send(err)
//         } else {
//             res.send(info)
//         }
//     });

//   });


// module.exports = router;

// router.get("/test", (req, res) => {

//     const message = {
//         from: 'test@test.test', // Sender address
//         to: 'test@test.tester',         // List of recipients
//         subject: 'Testing this test', // Subject line
//         text: 'Happy Testing!!!' // Plain text body
//     };
//     transport.sendMail(message, function(err, info) {
//         if (err) {
//             res.send(err)
//         } else {
//             res.send(info)
//         }
//     });

//   });


module.exports = router;