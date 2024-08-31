const nodemailer = require('nodemailer');
const crd = require("../Config/credentials");

exports.SendInvoiceMail = async (email, message) => {
    const mail = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: crd.user1,
            pass: crd.pass1
        }
    });

    try {
        await mail.sendMail({
            from: crd.user1,
            to: email,
            subject: message,
        });
        console.log(`Invoice Mail sent to ${email}`);
        return true;
    } catch (err) {
        console.error(`Error sending email: ${err}`);
        throw err;
    }
};