// server.js is the entry point of our application

// load config from .env file
var dotenv = require('dotenv').config()
if (dotenv.error) {
    throw dotenv.error
}
// load express application
const app = require('./app');
const port = process.env.PORT || 3000;

// starting server
var server = app.listen(port, function () {
    console.log('Express server listening on port ' + port);
    console.log('Database URL is ' + process.env.DB_URL);
});