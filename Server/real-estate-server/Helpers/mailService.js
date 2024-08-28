const nodemailer = require('nodemailer');
const crd = require("../Config/credentials");

exports.SendInvoiceMail = async (email, attachmentUrl, message) => {
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
            to: "hotlineclasher123@gmail.com",
            subject: " Tera Accoutn Bn Gya BSDK",
            html: message,
            attachments: [{
                filename: 'Receipt.pdf',
                path: attachmentUrl,
                contentType: 'application/pdf'
            }]
        });
        console.log(`Invoice Mail sent to ${email}`);
        return true;
    } catch (err) {
        console.error(`Error sending email: ${err}`);
        throw err;
    }
};