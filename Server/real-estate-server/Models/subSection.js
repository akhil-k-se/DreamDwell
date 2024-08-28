const mongoose = require('mongoose');

const subSectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    section: { type:String, required: true }
});

const SubSection = mongoose.model('SubSection', subSectionSchema);

module.exports = SubSection;
