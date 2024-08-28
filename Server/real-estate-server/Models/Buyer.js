
const mongoose = require('mongoose');
const buyerSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true,
    },
    address:{
        type:String,
    },
    country: {
        type:String,
    },
  });





const Buyer = mongoose.model("Buyer", buyerSchema);

module.exports = {
    Buyer,
    buyerSchema
};


