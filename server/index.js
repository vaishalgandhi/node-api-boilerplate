const express   = require('express');
const app       = express();
const api 		= require('./api');

// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api/', api);

// export the app for testing / web application
module.exports = app;