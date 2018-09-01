const router = require("express").Router();
const controller = require("./userController");
const authMiddleware = require(`${__dirMiddleware}/authMiddleware`);

router.get("/loggedin-user", authMiddleware, controller.LoggedInUser);

module.exports = router;
