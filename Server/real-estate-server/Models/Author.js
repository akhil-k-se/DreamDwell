
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: String,
    birthDate: Date,
    numberOfBooks:Number
});

const author = mongoose.model('author', authorSchema);

module.exports = author;
