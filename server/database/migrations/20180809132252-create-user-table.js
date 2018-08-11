'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(`users`, {
      id: {
        allowNull: false,
        autoIncrement: true,
        field: 'id',
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        allowNull: false,
        field: 'first_name',
        type: Sequelize.STRING,
      },
      lastName: {
        field: 'last_name',
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        field: 'email',
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        field: 'password',
        type: Sequelize.TEXT
      },
      dob: {
        field: 'dob',
        type: Sequelize.DATEONLY
      },
      status: {
        allowNull: false,
        field: 'status',
        defaultValue: 0,
        type: Sequelize.TINYINT(1)
      },
      isConfirmed: {
        allowNull: false,
        field: 'is_confirmed',
        defaultValue: 0,
        type: Sequelize.TINYINT(1)
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE
      },
      deletedAt: {
        field: 'deleted_at',
        type: Sequelize.DATE
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(`users`);
  }
};
