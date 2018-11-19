const ApplicationRoutes = require("./../ApplicationRoutes");
const verifyUser = require("./authenticate").verifyUser;
const AuthController = require("./auth.controller");
const validator = require("./auth.validator");

class AuthRoutes extends ApplicationRoutes {
    constructor() {
        super();
        this.controller = AuthController;
        this.registerRoute();
        this.loginRoute();
    }

    registerRoute() {
        this.router.post("/register", validator.register, (req, res, next) => {
            return this.controller.register(req, res, next)
        });
    }

    loginRoute() {
        // verifyUser middleware will check if given email
        // password is exist in database
        this.router.post("/login", verifyUser(), (req, res, next) => {
            return this.controller.login(req, res, next)
        });
    }
}

module.exports = new AuthRoutes().router;
