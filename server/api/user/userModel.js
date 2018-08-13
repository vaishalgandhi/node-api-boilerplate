'use strict';

const Sequelize = require('sequelize');
const db = require(`${__dirDatabase}/db-connect`);
const bcrypt = require('bcrypt');

const Model = db.define('users',
  {
    first_name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING(100)
    },
    email: {
      type: Sequelize.STRING(191),
      unique: true,
      allowNull: false
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    dob: {
      type: Sequelize.DATEONLY
    },
    status: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
      allowNull: false
    },
    is_confirmed: {
      type: Sequelize.TINYINT(1),
      defaultValue: 0,
      allowNull: false
    }
  }
);


/*
* Instance Methods
*/

// This method will compare plain text password to hashed password
Model.prototype.authenticate = function (inputPassword) { 
  return bcrypt.compareSync(inputPassword, this.password);
}

// This method will generate hash password from plain text password
Model.prototype.generatePasswordHash = function (plainPassword) { 
  const salt = bcrypt.genSaltSync(10);

  // Generate hash of plain password string using bcrypt
  return bcrypt.hashSync(plainPassword, salt);
}

// This method will convert our instance into object
// Remove password property from the object
Model.prototype.toJson = function () { 
  const obj = this.toObject()
  
  // Remove Password from the object
  delete obj.password;
  return obj;
}

// This is hook that will call before any instance is saved
Model.beforeSave(user => {
  user.password = this.generatePasswordHash(user.password);
});

module.exports = Model;