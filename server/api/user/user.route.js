import authMiddleware from "@middleware/authMiddleware";
import UserController from "./user.controller";

const router = require("express").Router();

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
