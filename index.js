// Requireing globals will set all global variables
// creating server by starting our application
import app from "@server";

// grab the defined port from config file
import { port } from "@config";

require("./server/globals");

class App {
    constructor() {
        this.port = port;
        this.app = app;
        this.initalizeApplication();
        this.handleProcessEvent();
    }

    // Listing our app on specified port
    initalizeApplication() {
        this.app.listen(this.port);
        console.log(`listening on http://localhost:${this.port}`);
    }

    // Handle Exit Event
    handleProcessEvent() {
        process
            // Handle normal exits
            .on("exit", (code) => {
                process.exit(code);
            })
            // Handle CTRL+C
            .on("SIGINT", () => {
                process.exit(0);
            })
            // Handle Uncaught Exception
            .on("uncaughtException", (error) => {
                console.log(error);
                process.exit(1);
            })
            // Handle Uncaught Rejection
            .on("unhandledRejection", (error) => {
                console.log(error);
                process.exit(1);
            });
    }
}

module.exports = new App();
