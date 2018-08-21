'use strict';
const util = require('util');

module.exports = function GeneralError(message, code=500) {
  Error.captureStackTrace(this, this.constructor);
  this.name = 'GeneralError';
  this.error_message = message;
  this.error_code = code;
};

util.inherits(module.exports, Error);