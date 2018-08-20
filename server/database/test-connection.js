// Requireing globals will set all global variables
require('./../globals');

const sequelize = require('./db-connect');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    process.exit();
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit();
  });