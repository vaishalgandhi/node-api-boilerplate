'use strict';

const Sequelize = require('sequelize');
const db = require(`${__dirDatabase}/db-connect`);
const stateModel = require(`./../state/stateModel`);

const Model = db.define('countries',
  {
    name: { type: Sequelize.STRING, allowNull: false },
    sortname: { type: Sequelize.CHAR(3) },
    status: { type: Sequelize.TINYINT(1) },
  },
  {
    defaultScope: {
      where: {
        status: 1
      }
    }
  }
);

Model.hasMany(stateModel, { as: 'states', foreignKey:"country_id", attributes: ['id', 'name']});

module.exports = Model;