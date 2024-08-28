const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    section: { type:String, required: true },
    subSection : {type:String, required:true}
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
