const express = require('express');
const db = require('./config/db');
const app = express();

// use prefix /api for all routes
app.use('/api', require('./routes/router'));

module.exports = app;