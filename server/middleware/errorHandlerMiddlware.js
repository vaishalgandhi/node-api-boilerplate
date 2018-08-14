const logger = require(`${__dirUtil}/logger`);

module.exports = function() {
  return function(err, req, res, next) {
    // if error thrown from jwt validation check
    if (err.name === 'UnauthorizedError') {
      logger.error(err);
      res.send({ 'status': 0, 'error': 'Invalid token'});
      return;
    }

    logger.error(err.stack);

    res.send({ 'status': 0, 'error': 'Internal Server Error'});
  }
};
