const ApplicationRoutes = require("./../ApplicationRoutes");
const verifyUser = require("./authenticate").verifyUser;
const controller = require("./auth.controller");
const validator = require("./auth.validator");

class AuthRoutes extends ApplicationRoutes {
    constructor() {
        super();
        this.registerRoute();
        this.loginRoute();
    }

    registerRoute() {
        this.router.post("/register", validator.register, controller.register);
    }

    loginRoute() {
        // verifyUser middleware will check if given email
        // password is exist in database
        this.router.post("/login", verifyUser(), controller.login);
    }
}

module.exports = new AuthRoutes().router;
