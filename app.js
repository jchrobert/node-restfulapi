const express = require('express');
const db = require('./config/db');
const app = express();

var QuoteController = require('./routes/QuoteController');
app.use('/quotes', QuoteController);

module.exports = app;