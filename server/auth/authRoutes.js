const router = require('express').Router();
const verifyUser = require('./authenticate').verifyUser;
const controller = require('./authController');
const validator = require('./authValidator');

router.post('/register', validator.register, controller.register);

// verifyUser middleware will check if given email
// password is exist in database
router.post('/login', verifyUser(), controller.login);

module.exports = router;
