const accountSid = 'ACd6d4c6ce091fb745009ee64864a19c16';
const authToken = '666b23511f04a3ba2e7b2dbba7f3f854';
const client = require('twilio')(accountSid, authToken);

function sendGreetSMS(mobile_number)
{
    try{
        client.messages
    .create({
        body: 'Hello I am Akhil',
        from: '+12513103873',
        to: mobile_number
    })
    console.log("SMS Sent");
    // .done();
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = sendGreetSMS