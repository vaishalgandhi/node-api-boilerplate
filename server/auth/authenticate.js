const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const logger = require(`${__dirUtil}/logger`);
const User = require(`${__dirApi}/user/userModel`);

const config = require(`${__dirConfig}`);
const checkToken = expressJwt({ secret: config.jwt_key });

const GeneralError = require(`${__dirUtil}/generalError`);

exports.decodeToken = function() {
  return function(req, res, next) {
    // Token can be passed in header or query string
    // so if token is passed in query string then add that
    // token in header authorization
    if (req.query && req.query.hasOwnProperty('access_token')) {
      req.headers.authorization = 'Bearer ' + req.query.access_token;
    }

    // This is pre-defined middleware by express-jwt which will
    // send error back using res/next if not valid
    // or if it is valid thenattach attach the user object in req
    checkToken(req, res, next);
  };
};

exports.getLoggedInUser = function() {
  return function(req, res, next) {
    User.findById(req.user.id)
      .then(function(user) {
        if (!user) {
          // Check if token is decoded but that user
          // is not found in out database
          logger.error("User not found");
          next(new GeneralError('Unauthorized! User not found', 401));
        } else {
          // If user is found then update req.user object
          req.user = user;
          next();
        }
      }, function(err) {
        next(err);
      });
  }
};

exports.verifyUser = function() {
  return function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    // if no email or password then send
    if (!email || !password) {
      throw new GeneralError('You need a email and password', 400);
    }

    // look user up in the DB so we can check
    // if the passwords match for the email
    User.findOne({ where: { email: email } })
      .then(function(user) {
        if (!user) {
          logger.error("No user with the given email");
          next(new GeneralError('No user with the given email', 401));
        } else {
          // Comparing hash password
          if (!user.authenticate(password)) {
            logger.error("Wrong password");
            next(new GeneralError('Wrong password', 401));
          } else {
            // if everything is good,
            // then attach to req.user
            // and call next so the controller
            // can sign a token from the req.user.id
            req.user = user;
            next();
          }
        }
      }).catch((error) => {
        next(error);
      });
  };
};

// This method will generate JWT token for given credentials
exports.signToken = function(user) {
  return jwt.sign(
    {id: user.id},
    config.jwt_key,
    {expiresIn: config.jwt_timeout}
  );
};
