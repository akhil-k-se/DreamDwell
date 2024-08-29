const checkMissingKeys = require("../Utils/requiredKeysInDB");
const sellerSchema = require("../Models/Seller").sellerSchema;
const seller = require("../Models/Seller")

const addSeller = async function(req, res) {
    try {
        const inputData = req.body;
        console.log(inputData);
        const missingKeys = checkMissingKeys(inputData,sellerSchema);
        console.log("Missing Keys Checked");

        if (missingKeys.length > 0) {
            return res.status(400).json({
                error: "Missing required fields",
                missingKeys: missingKeys
            });
        } else {
            console.log("Hello2");

            const checkEmail = await seller.findOne({ email: inputData.email });
            const checkMobileNumber = await seller.findOne({ mobile_number: inputData.mobile_number });

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
                await sendMail.SendInvoiceMail(inputData.email);
                await seller.create(inputData);

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

module.exports={addSeller};