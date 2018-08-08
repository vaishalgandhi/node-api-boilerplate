var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/notes', require('./note/noteRoutes'));

module.exports = router;