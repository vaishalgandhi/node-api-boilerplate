
const countriesArray = require("./data/countries").countries;

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert("countries", countriesArray, {}),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete("countries", null, {}),
};
