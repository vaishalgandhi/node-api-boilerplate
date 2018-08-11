'use strict';
const citiesArray = require('./data/cities').cities;

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('cities', citiesArray, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cities', null, {});
  }
};
