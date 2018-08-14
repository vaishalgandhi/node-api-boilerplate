const express   = require('express');
const app       = express();
const api 		= require('./api');
const logger	= require(`${__dirUtil}/logger`);
const auth 		= require('./auth/authRoutes');

// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api/', api);

// Setup authentication routes
app.use('/auth', auth);

// Error  Handler
app.use(function(err, req, res, next) {
  // if error thrown from jwt validation check
  if (err.name === 'UnauthorizedError') {
  	logger.error(err);
    res.send({ 'status': 0, 'error': 'Invalid token'});
    return;
  }

  logger.error(err.stack);

  res.send({ 'status': 0, 'error': 'Internal Server Error'});
});

// export the app for testing / web application
module.exports = app;