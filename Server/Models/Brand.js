const mongoose = require('mongoose');
const Product = require('./Products');

const brandSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    website: {
        type: String,
        required: true
        
    },
    contactEmail: {
        type: String,
    },
    contactNumber: {
        type:Number
    },
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Products'
    }
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
