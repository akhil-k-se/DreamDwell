const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type:String, required: true },
    publication: { type:Date, required: true },
    section: { type:String, required: true },
    subSection: {type: String, required: true },
    publishedDate: Date,
    pages: Number
});

const book = mongoose.model('book', bookSchema);

module.exports = book;
