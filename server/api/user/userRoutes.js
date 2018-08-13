const router = require('express').Router();
const logger = require(`${__dirUtil}/logger`);
const controller = require('./userController');
const auth = require(`${__dirAuth}/authenticate`);
const authMiddleware = require(`${__dirMiddleware}/authMiddleware`);
var checkUser = [auth.decodeToken(), auth.getLoggedInUser()];

router.get('/loggedin-user', checkUser, controller.LoggedInUser);

module.exports = router;
