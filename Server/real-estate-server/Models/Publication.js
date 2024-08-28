
const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: String,
    dateEstablished: Date
});

const publication = mongoose.model('publication', publicationSchema);

module.exports = publication;
