const router = require("express").Router();
const verifyUser = require("./authenticate.service").verifyUser;
const AuthController = require("./auth.controller");
const validator = require("./auth.validator");

class AuthRoutes {
    constructor() {
        this.router = router;
        this.controller = AuthController;
        this.registerRoute();
        this.loginRoute();
    }

    registerRoute() {
        this.router.post("/register", validator.register, (req, res, next) => this.controller.register(req, res, next));
    }

    loginRoute() {
        // verifyUser middleware will check if given email
        // password is exist in database
        this.router.post("/login", verifyUser(), (req, res, next) => this.controller.login(req, res, next));
    }
}

module.exports = new AuthRoutes().router;
