"use strict";
const ApplicationRoutes = require("./../ApplicationRoutes");
const countryModule = require("./country/countryRoutes");
const userModule = require("./user/userRoutes");

class ApiRoutes extends ApplicationRoutes
{
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