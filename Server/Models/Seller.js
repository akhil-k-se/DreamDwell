
const mongoose = require('mongoose');
const sellerSchema = new mongoose.Schema({
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


const Seller = mongoose.model("Seller", sellerSchema);

module.exports = {
    Seller,
    sellerSchema
};


