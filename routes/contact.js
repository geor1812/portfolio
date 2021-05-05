require("dotenv").config();
const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/api/contact", (req, res) => {
    (async function sendMail() {
        try {
            let transporter = nodemailer.createTransport({
                port: 465,               // true for 465, false for other ports
                host: "smtp.gmail.com",
                auth: {
                    user: process.env.EMAIL_ADDRESS,
                    pass: process.env.EMAIL_PASSWORD
                },
                secure: true
            });
            
            const message = `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`;
            let info = await transporter.sendMail({
                from: process.env.EMAIL_ADDRESS, // sender address
                to: process.env.RECEIVER_EMAIL_ADDRESS, // list of receivers
                subject: req.body.name + " - message from portfolio contact page", // Subject line
                text: message
            });
            
            console.log("Message sent: %s", info.messageId);
        } catch (error) {
            console.log(error);
        } 
    })();
    res.redirect("/contact");
});

module.exports = {
    router
};