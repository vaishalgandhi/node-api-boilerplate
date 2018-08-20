const logger = require(`${__dirUtil}/logger`);

module.exports = function() {
  return function(error, req, res, next) {
    logger.error(error);
    // if error thrown from jwt validation check
    if (typeof error === Object) {
      if(error.hasOwnProperty('errorMessage') && error.hasOwnProperty('errorCode')) {
        return res.status(error.errorCode).send({ 'errors': [ error.errorMessage ] });        
      }
    }

    // if error thrown from jwt validation check
    if (error.name === 'UnauthorizedError') {
      return res.status(401).send({ 'errors': ['Invalid token'] });
    }

    return res.status(500).send({' errors': ['Internal Server Error'] });
  }
};
