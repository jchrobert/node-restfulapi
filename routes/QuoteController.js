const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

var Quote = require('../model/Quote');

// List all
router.get('/', function (req, res) {
    Quote.find({}, function (err, quotes) {
        if (err) return res.status(500).send("There was a problem finding the quotes.");
        res.status(200).send(quotes);
    });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    Quote.findById(req.params.id, function (err, quote) {
        if (err) return res.status(500).send("There was a problem finding the quote.");
        if (!quote) return res.status(404).send("No quote found.");
        res.status(200).send(quote);
    });
});

// Get Random
router.get('/random', function (req, res) {
    Quote.count().exec(function (err, count) {

    // random entry
    var random = Math.floor(Math.random() * count)
    //console.log(random)
    // query all quotes but only fetch one offset by our random #
    Quote.findOne().skip(random).exec(
        function (err, quote) {
            if (err) return res.status(500).send("There was a problem requesting the quote.");
            res.status(200).send(quote);
        });
    });
});

router.get('/author', function (req, res) {
    Quote.find({"author" : req.query.name}, function (err, quotes) {
        if (err) return res.status(500).send("There was a problem finding the quotes.");
        res.status(200).send(quotes);
    });
});


// Create new quote
router.post('/', function (req, res) {
    Quote.create({
            text : req.body.text,
            author : req.body.author
        },
        function (err, quote) {
            if (err) return res.status(500).send("There was a problem adding the quote to the database.");
            res.status(200).send(quote);
        });
});

module.exports = router;