'use strict';
const router = require('express').Router();
const countryModule = require('./country/countryRoutes');

// api router will mount other routers
// for all our resources
router.use('/countries', countryModule);

module.exports = router;