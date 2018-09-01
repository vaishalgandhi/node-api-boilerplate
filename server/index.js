const express   			= require("express");
const app       			= express();
const appMiddlware			= require(`${__dirMiddleware}/appMiddlware`);
const errorHandlerMiddlware	= require(`${__dirMiddleware}/errorHandlerMiddlware`);

const api 		= require("./api");
const auth 		= require("./auth/authRoutes");

// setup the app middlware
appMiddlware(app);

// setup the api
app.use("/api/", api);

// Setup authentication routes
app.use("/auth", auth);

// Centralize Error  Handler
app.use(errorHandlerMiddlware());


// export the app for testing / web application
module.exports = app;