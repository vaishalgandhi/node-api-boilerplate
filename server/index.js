const express   			= require("express");
const ApplicationMiddleware	= require(`${__dirMiddleware}/ApplicationMiddleware`);
const ErrorHandlerMiddleware= require(`${__dirMiddleware}/ErrorHandlerMiddleware`);

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
        ApplicationMiddleware.init(this.app);
    }

    apiSetup() {
        // Setup authentication routes
        this.app.use("/api/", api);

        // setup other api routes
        this.app.use("/auth", auth);
    }

    errorHandler() {
        this.app.use(ErrorHandlerMiddleware);
    }
}

module.exports = new Server().app;
