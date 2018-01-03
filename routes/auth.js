const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const admin = require('../config/admin');
const securityConfig = require('../security/config');

// Endpoint for authorized users to obtain a web token
router.get('/getToken', function (req, res) {
    console.log("Generate JWT Token for user: ", req.query.user);
    var userSuccess = req.query.user == admin.user && req.query.password == admin.password;
    if (!userSuccess) return res.status(500).send("Wrong user credentials.")
    // create a token
    var token = jwt.sign({admin: admin.user}, securityConfig.signingKey, {
        expiresIn: 60*5 // expires in 5 minutes
    });
    res.status(200).send({auth: true, token: token});
});

module.exports = router;