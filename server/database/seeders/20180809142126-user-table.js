'use strict';
const moment = require('moment');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

const users = [
  {
    first_name: 'Admin',
    last_name: 'User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('1234', salt),
    dob: '1970-01-01',
    status: 1,
    is_confirmed: 1,
    created_at: moment().format('Y-M-D hh:mm:ss'),
  },
  {
    first_name: 'Front',
    last_name: 'User',
    email: 'user@user.com',
    password: bcrypt.hashSync('1234', salt),
    dob: '1970-01-01',
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
