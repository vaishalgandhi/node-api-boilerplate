const User = require('../api/user/userModel');
const authenticate = require('./authenticate');

exports.login = function(req, res, next) {
  // This route will called after it passes
  // from verifyUser middleware and inside
  // that middleware we attach user object
  // to req object so we are using that user
  // object to sign the jwt token and responed
  // it back to client
  const token = authenticate.signToken(req.user);
  res.json({ token: token });
};
