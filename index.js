// entry point for our Application

// setup config first before anything by requiring it
const config = require('./server/config/');

// creating server by starting our application
const app = require('./server');

app.listen(config.port);
console.log('listening on http://localhost:' + config.port);