const bodyParser = require('body-parser');

// setup global middleware here
module.exports = function(app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};
