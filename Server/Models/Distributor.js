const mongoose = require('mongoose');

const distributorSchema = mongoose.Schema({
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
    }
});

const Distributor = mongoose.model('Distributor', distributorSchema);

module.exports = Distributor;
