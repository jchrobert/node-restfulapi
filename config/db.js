
const mongoose = require('mongoose');
mongoose.connect('mongodb://' + process.env.DB_URL);