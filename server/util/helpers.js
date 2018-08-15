const _ = require('lodash');
const moment = require('moment');
const { validationResult } = require('express-validator/check');
const logger = require(`${__dirUtil}/logger`);

const helpers = {};

// Handler for any validation error occurs
helpers.validationErrorHandler = (req, res, next) => {
	const errors = validationResult(req);
	const errorArray = [];
	
	if (!errors.isEmpty()) {
		_.each(errors.mapped(), (error) => {
			errorArray.push(error.msg);
		}).errors

		return res.status(422).json({ errors: errorArray });
	}

	return next();
};

// Handler for any sequelize error occurs
helpers.sequelizeErrorHandler = (sequelizeError) => {
	if (typeof sequelizeError === "object") {
		if (sequelizeError.hasOwnProperty('errors')) {
			const errorArray = [];
			_.each(sequelizeError.errors, function(element, key) {
				errorArray.push(element.message);
			});

			logger.error(errorArray);

			return errorArray;
		}
	}
	
	logger.error(sequelizeError);

	return ['something went wrong'];
};

// Generate random number of specified length
helpers.randomNumber = (length) => {
  return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
};

module.exports = helpers;