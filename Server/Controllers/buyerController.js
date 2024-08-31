const buyer = require("../Models/Buyer").Buyer;
const buyerSchema = require("../Models/Buyer").buyerSchema;
const checkMissingKeys = require("../Utils/requiredKeysInDB");
const sendMail = require("../Helpers/mailService");

const addBuyer = async function(req, res) {
    try {
        const inputData = req.body;
        console.log(inputData);
        const missingKeys = checkMissingKeys(inputData,buyerSchema);
        console.log("Missing Keys Checked");

        if (missingKeys.length > 0) {
            return res.status(400).json({
                error: "Missing required fields",
                missingKeys: missingKeys
            });
        } else {
            console.log("Hello2");

            const checkEmail = await buyer.findOne({ email: inputData.email });
            const checkMobileNumber = await buyer.findOne({ phoneNumber: inputData.phoneNumber });

            if (checkEmail !== null) {
                return res.status(409).json({
                    status: 409,
                    msg: "User with this email already exists",
                    field: "email"
                });
            } else if (checkMobileNumber !== null) {
                return res.status(409).json({
                    status: 409,
                    msg: "User with this mobile number already exists",
                    field: "mobile_number"
                });
            } else {
                console.log("hello");
                await sendMail.SendInvoiceMail(inputData.email,"YOur Account Created");
                await buyer.create(inputData);

                return res.json({
                    msg: "User created successfully!"
                });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(400).json({
            msg: "error: 403"
        });
    }
};

const loginBuyer = async function(req,res){
    try{
        const inputData = req.body;
        console.log(inputData);
        const check = await buyer.findOne({email:inputData.email,password:inputData.password});
        console.log(check);
        if(check==null){
            console.log("checked");
            return res.json({
                mssg:"The Credentials are Wrong"
            });
        }
        else{
            return res.json({
                check
            })
        }


    }
    catch (err) {
        console.log(err);
        return res.status(400).json({
            msg: "error: 403"
        });
    }
}

module.exports = { addBuyer,loginBuyer};
