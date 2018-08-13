var router = require('express').Router();
var verifyUser = require('./authenticate').verifyUser;
var controller = require('./authController');

// before we send back a jwt, lets check
// the password and username match what is in the DB
router.post('/login', verifyUser(), controller.login);

module.exports = router;
