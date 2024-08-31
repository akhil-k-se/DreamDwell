const mongoose = require('mongoose');
const propertySchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    propertyType: {
        type: String,
        required: true
    },
    beds: {
        type: Number,
        required: true
    },
    baths: {
        type: Number,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
},{timestamps: true})

const Property = mongoose.model('Property', propertySchema);
module.exports={
    Property,
}