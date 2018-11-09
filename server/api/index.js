const ApplicationRoutes = require("./../ApplicationRoutes");
const countryModule = require("./country/country.route");
const userModule = require("./user/user.route");

class ApiRoutes extends ApplicationRoutes {
    constructor() {
        super();
        this.countryRoute();
        this.userRoute();
    }

    countryRoute() {
        this.router.use("/countries", countryModule);
    }

    userRoute() {
        this.router.use("/users", userModule);
    }
}

module.exports = new ApiRoutes().router;
