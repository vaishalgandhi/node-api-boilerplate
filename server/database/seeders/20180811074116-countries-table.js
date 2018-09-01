"use strict";
const countriesArray = require("./data/countries").countries;

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("countries", countriesArray, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("countries", null, {});
    },
};
