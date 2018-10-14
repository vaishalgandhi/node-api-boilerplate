// Requireing globals will set all global variables
require("./server/globals");

// creating server by starting our application
const app = require(`${__dirServer}`);

// grab the defined port from config file
const { port } = require(`${__dirServer}config/`);

class App
{
    constructor () {
        this.port = port;
        this.app = app;
        this.initalizeApplication();
        this.handleUncaughtException();
        this.handleProcessEvent();
    }

    // Listing our app on specified port
    initalizeApplication() {
        this.app.listen(this.port);
        console.log("listening on http://localhost:" + this.port);
    }

    // Handle Uncaught Exception
    handleUncaughtException () {
        process.on("uncaughtException", () => {
            process.exit(1);
        });
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
            });
    }
}

module.exports = new App();
