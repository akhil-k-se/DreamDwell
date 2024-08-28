const accountSid = 'ACd6d4c6ce091fb745009ee64864a19c16';
const authToken = '666b23511f04a3ba2e7b2dbba7f3f854';
const client = require('twilio')(accountSid, authToken);

function WhatsappMssg()
{
    try{
        client.messages
    .create({
        body: 'Hi i am AKhil',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+917814634298'
    })
    console.log("Whatsapp Mssg Sent");
    }
    catch(err)
    {
        console.log(err);
    }
}
module.exports= WhatsappMssg