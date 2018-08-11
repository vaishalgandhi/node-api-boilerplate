'use strict';
const statesArray = require('./data/states').states;

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('states', statesArray, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('states', null, {});
  }
};
