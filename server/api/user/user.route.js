const router = require("express").Router();
const controller = require("./user.controller");

const authMiddleware = require(`${__dirMiddleware}/authMiddleware`);

router.get("/loggedin-user", authMiddleware, controller.loggedInUser);

module.exports = router;
