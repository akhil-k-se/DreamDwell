const mongoose = require('mongoose');
const Distributor = require('./Distributor');

const RetailerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type:String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    products:{
        type: Schema.Types.ObjectId,
        ref: 'Products'
    },
    Distributor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Distributors'
    }
});

const Retailer = mongoose.model('Retailer', RetailerSchemaSchema);

module.exports = Retailer;
