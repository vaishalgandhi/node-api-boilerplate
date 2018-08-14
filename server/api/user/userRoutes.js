const router = require('express').Router();
const logger = require(`${__dirUtil}/logger`);
const controller = require('./userController');
const auth = require(`${__dirAuth}/authenticate`);
const authMiddleware = require(`${__dirMiddleware}/authMiddleware`);

router.get('/loggedin-user', authMiddleware, controller.LoggedInUser);

module.exports = router;
