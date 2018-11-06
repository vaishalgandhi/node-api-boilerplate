const _ = require("lodash");
const config = require("./../config/");

// fetching application config and merge custom config for sequelize.js
const configurations = _.merge(config.db, {
    // Use a different table name. Default: SequelizeMeta
    migrationStorageTableName: "migrations",
});

module.exports = {
    [config.env]: configurations,
};
