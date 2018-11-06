const _ = require("lodash");
require("dotenv").config();

const config = {
    dev: "development",
    test: "testing",
    stag: "staging",
    prod: "production",
    port: process.env.APP_PORT || 3000,
    jwt_key: process.env.JWT_SECRET_KEY,
    jwt_timeout: process.env.JWT_EXPIRY_TIME,
};

process.env.NODE_ENV = process.env.APP_ENV || config.dev;
config.env = process.env.APP_ENV;

let envConfig;
// require could error out if
// the file don't exist so lets try this statement
// and fallback to an empty object if it does error out
try {
    envConfig = require(`./${config.env}`);
    // just making sure the require actually
    // got something back :)
    envConfig = envConfig || {};
} catch (e) {
    envConfig = {};
}

// merge the two config files together
// the envConfig file will overwrite properties
// on the config object
module.exports = _.merge(config, envConfig);
