// defining global variable for the application
global.__dirRoot = __dirname + '/';
global.__dirServer = __dirname + '/server/';
global.__dirApi = __dirname + '/server/api/';
global.__dirConfig = __dirname + '/server/config/';
global.__dirDatabase = __dirname + '/server/database/';
global.__dirMiddeleware = __dirname + '/server/middleware/';
global.__dirUtil = __dirname + '/server/util/';

// setup config first before anything by requiring it
const config = require(`${__dirServer}config/`);

// creating server by starting our application
const app = require(`${__dirServer}`);

app.listen(config.port);
console.log('listening on http://localhost:' + config.port);