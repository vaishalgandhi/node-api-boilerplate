'use strict';
var moment = require('moment');

const users = [
  {
    first_name: 'Admin',
    last_name: 'User',
    email: 'admin@admin.com',
    password: '1234',
    status: 1,
    is_confirmed: 1,
    created_at: moment().format('Y-M-D hh:mm:ss'),
  },
  {
    first_name: 'Front',
    last_name: 'User',
    email: 'user@user.com',
    password: '1234',
    status: 1,
    is_confirmed: 1,
    created_at: moment().format('Y-M-D hh:mm:ss'),
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(`users`, users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(`users`, null, {});
  }
};
