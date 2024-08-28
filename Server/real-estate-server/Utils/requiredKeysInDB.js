// Utils/checkMissingKeys.js

const schema = require('../Models/Buyer').buyerSchema;
console.log("Hello00")

function checkMissingKeys(inputData) {
    const requiredKeys = [];
    for (const key in schema.obj) {
        if (schema.obj[key].required) {
            requiredKeys.push(key);
        }
    }

    const missingKeys = [];
    for (let i = 0; i < requiredKeys.length; i++) {
        if (!(requiredKeys[i] in inputData)) {
            missingKeys.push(requiredKeys[i]);
        }
    }

    return missingKeys;
}

module.exports = checkMissingKeys;
