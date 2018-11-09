import ModelHelpers from './model-helper';
import DatabaseHelper from './database-helper';
import CommonHelper from './common-helper';

const helpers = {
	...ModelHelpers,
	...DatabaseHelper,
	...CommonHelper
};

module.exports = helpers;
