'use strict';

const Sequelize = require('sequelize');
const db = require(`${__dirDatabase}/db-connect`);
const countryModel = require(`./../country/countryModel`);

const Model = db.define('states',
  {
    name: { type: Sequelize.STRING, allowNull: false },
    // set relationship (hasOne) with `Series`
  country_id: {
    type: Sequelize.INTEGER,
    references: {
      model: countryModel, // Can be both a string representing the table name, or a reference to the model
      key:   "id"
    }
  }
  }
);

//Model.belongsTo(countryModel);

module.exports = Model;