const express   			= require("express");
const appMiddlware			= require(`${__dirMiddleware}/appMiddlware`);
const errorHandlerMiddlware	= require(`${__dirMiddleware}/errorHandlerMiddlware`);

const api 		= require("./api");
const auth 		= require("./auth/authRoutes");

class Server
{
	constructor() {
		this.app = express();
		this.middleware();
		this.apiSetup();
		this.errorHandler();
	}

	middleware () {
		appMiddlware(this.app);
	}

	apiSetup() {
		// Setup authentication routes
		this.app.use("/api/", api);

		// setup other api routes
		this.app.use("/auth", auth);
	}

	errorHandler() {
		this.app.use(errorHandlerMiddlware());
	}
}

module.exports = new Server().app;
