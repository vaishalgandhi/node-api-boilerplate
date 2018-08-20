const _ = require('lodash');
const moment = require('moment');
const { sequelizeErrorHandler } = require(`${__dirUtil}/helpers`);
const User = require(`${__dirApi}/user/userModel`);
const authenticate = require('./authenticate');

/**
 * @api {post} auth/register Registration
 * @apiGroup Authentication
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
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

/**
 * @api {post} auth/login Login
 * @apiGroup Authentication
 *
 * @apiParam {String} email Users Email Address
 * @apiParam {String} password Users password
 *
 * @apiSuccess {String} token JWT token of authenticated user
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
 *     }
 *
 * @apiError UserNotFound The id of the User was not found
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
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
