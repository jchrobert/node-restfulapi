const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function (req, res) {
    res.status(200).send("Welcome to the Quotes API");
});

router.use('/quotes', require('./quotes'));
router.use('/auth', require('./auth'));

module.exports = router;