var express = require('express');
var bodyParser = require('body-parser');
var cors = require('./../cors');
const emailRouter = express.Router();
var nodeMailer = require('nodemailer');
emailRouter.route('/')

.options(cors.cors,(req,res)=>{
    console.log("Coming email here");
    res.sendStatus(200);
})
.post(cors.cors, (req,res,next) =>{
    let transporter = nodeMailer.createTransport({
        host: "email-smtp.us-east-1.amazonaws.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "AKIAZ47ZBAGYWTJV3EJA", // generated ethereal user
          pass: "BDWy2v0UCaC1/d6bojdBzQHWQxM/+9d3NccL7D9s2lZV", // generated ethereal password
        },
      });
    var mailOptions = {
        from: 'contact@monetamarket.com',
        to: 'support@monetamarket.com',
        subject: `New client contact information`,
        html: `Name: `+req.body.name +`<br>`+ `Phone Number :`+req.body.phone+`<br>`+ `Email :`+req.body.email+`<br>`+ `Comments :`+req.body.comments
    };
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error, "emailRouter file");
        res.send('error')        
    } else{
        console.log('Email sent: '+ info.response);
        res.status(200).json({
            ok: true,
            message: 'Message sent correctly'
        })
        }
    });
})


module.exports = emailRouter;