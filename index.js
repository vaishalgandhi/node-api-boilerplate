// Requireing globals will set all global variables
require("./server/globals");

// creating server by starting our application
const app = require(`${__dirServer}`);

// grab the defined port from config file
const { port, } = require(`${__dirServer}config/`);

// Listing our app on specified port
app.listen(port);
console.log("listening on http://localhost:" + port);

// Handle Exit Event
process
// Handle normal exits
    .on("exit", (code) => {
        process.exit(code);
    })
// Handle CTRL+C
    .on("SIGINT", () => {
        process.exit(0);
    });
