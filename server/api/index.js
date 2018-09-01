"use strict";
const router = require("express").Router();
const countryModule = require("./country/countryRoutes");
const userModule = require("./user/userRoutes");

// api router will mount other routers
// for all our resources
router.use("/countries", countryModule);

router.use("/users", userModule);

module.exports = router;