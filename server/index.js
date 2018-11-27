import express from "express";
import ApplicationMiddleware from "@middleware/ApplicationMiddleware";
import ErrorHandlerMiddleware from "@middleware/ErrorHandlerMiddleware";
import api from "@api";
import auth from "@auth/auth.route";

class Server {
    constructor() {
        this.app = express();
        this.middleware();
        this.apiSetup();
        this.errorHandler();
    }

    middleware() {
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
