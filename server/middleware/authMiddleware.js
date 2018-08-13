const express       = require('express');
const app           = express();
const authenticate  = require(`${__dirAuth}/authenticate`);

// setup authenticate middleware here
module.exports = function() {
	app.use(authenticate.decodeToken());
	app.use(authenticate.getLoggedInUser());
};
