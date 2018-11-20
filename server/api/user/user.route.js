const router = require("express").Router();
const UserController = require("./user.controller");

const authMiddleware = require(`${__dirMiddleware}/authMiddleware`);

class UserRoutes {
    constructor() {
        this.router = router;
        this.controller = UserController;
        this.getLoggedInUserDetails();
    }

    getLoggedInUserDetails() {
        this.router.get("/loggedin-user", authMiddleware, (req, res, next) => this.controller.loggedInUser(req, res, next));
    }
}

module.exports = new UserRoutes().router;
