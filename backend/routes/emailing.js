const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');


let transport = nodemailer.createTransport({
    host: 'smtp.googlemail.com', // Gmail Host
    port: 465, // Port
    secure: true, // this is true as port is 465
    auth: {
       user: 'g13.cfg.test',
       pass: 'notasecurepassword'
    }
});


function makeEmail(resources){

    var body="Hello,<br><br> Here are the resources you requested:<br><br>"
    resources.forEach(function (resource) {
        body += "<strong>" +resource["title"]+"</strong><br>"
        body += "&emsp; - " +resource["description"]+"<br>"
        body += "&emsp; - <a href=\"" +resource["link"]+ "\">Learn More</a><br><br>"
    });

    body+="Best regards,<br><br>Chicago Children's Advocacy Center<br>"
    return body;


    // var body="Hello,<br><br> Thank you for requesting a personalized resource and referral guide. Here are the items you requested:<br><br>"
    // resources.forEach(function (resource) {
    //     body += "<strong>" +resource["title"]+"</strong><br>"
    //     body += "&emsp; - " +resource["description"]+"<br>"
    //     body += "&emsp; - <a href=\"" +resource["link"]+ "\">Learn More</a><br><br>"
    // });

    // body+="Best regards,<br><br>Chicago Children's Advocacy Center<br> 1240 S. Damen Ave.<br> Chicago, IL 60608<br> (312) 492-3700<br>"
    // return body;
}



// Sample request body input:

// {
//     "email": "EMAIL@HERE.COM",
//     "resources": [
//         {"title":"title here", "description":"description here", "link":"link.com"},
//         ... ,
//     	{"title":"title here", "description":"description here", "link":"link.com"}
//     	]
// }

router.post("/sendEmail", (req, res) => {
    let req_obj = JSON.parse(JSON.stringify(req.body));
    let body = makeEmail(req_obj.resources);
    let recipient = req_obj.email;

    const message = {
        from: 'Code for Good Test<g13.cfg.test@gmail.com>', // Sender address
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




module.exports = router;