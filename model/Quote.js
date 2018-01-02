
const mongoose = require('mongoose');
const QuoteSchema = new mongoose.Schema({
    text: String,
    author: String
}, {
    versionKey: false
});
mongoose.model('Quote', QuoteSchema, 'quotes');
module.exports = mongoose.model('Quote');