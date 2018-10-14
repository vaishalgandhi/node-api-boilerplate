const _ = require("lodash");
const config = require("./../config/");
const Sequelize = require("sequelize");

// fetching application config and merge custom config for sequelize.js
const databaseConfigurations = _.merge(config.db, {
    // disable inserting undefined values as NULL
    // - default: false
    omitNull: true,

    // Specify options, which are used when sequelize.define is called.
    // The following example:
    //   define: { timestamps: false }
    // is basically the same as:
    //   sequelize.define(name, attributes, { timestamps: false })
    // so defining the timestamps for each model will be not necessary
    define: {
        underscored: true,
        paranoid: true,
        freezeTableName: false,
        charset: "utf8mb4",
        dialectOptions: {
            collate: "utf8mb4_unicode_ci",
        },
        timestamps: true,
    },

    // similar for sync: you can define this to always force sync for models
    sync: {
        force: true,
    },

    // pool configuration used to pool database connections
    pool: {
        min: 0,
        max: 5, // Never have more than five open connections
        idle: 30000, // Remove a connection from the pool after the connection has been idle
        acquire: 60000,
    },
});

module.exports = new Sequelize(databaseConfigurations);