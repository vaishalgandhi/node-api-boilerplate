const _ = require('lodash');
const moment = require('moment');
const { sequelizeErrorHandler } = require(`${__dirUtil}/helpers`);
const User = require(`${__dirApi}/user/userModel`);
const authenticate = require('./authenticate');

exports.register = function(req, res, next) {
  // Converting dob format
  req.body.dob = moment(req.body.dob, 'DD-MM-YYYY').format('YYYY-MM-DD');

  // adding default active status in input object
  const input = _.extend(req.body, {
    'status': 1
  });

  User.create(input)
    .then(user => {
      return res.json({ 'message': 'User created successfully', data: user.toJson() });
    })
    .catch(error => {
      return res.status(500).json({ errors: sequelizeErrorHandler(error) });
    })
};

exports.login = function(req, res, next) {
  // This route will called after it passes
  // from verifyUser middleware and inside
  // that middleware we attach user object
  // to req object so we are using that user
  // object to sign the jwt token and responed
  // it back to client
  const token = authenticate.signToken(req.user);
  return res.json({ token: token });
};
