// This module will not export anything because
// this module will only set gloobal variables

// defining global variable for the application
global.__dirRoot = __dirname + '/../';
global.__dirServer = __dirname + '/';
global.__dirApi = __dirname + '/api/';
global.__dirAuth = __dirname + '/auth/';
global.__dirConfig = __dirname + '/config/';
global.__dirDatabase = __dirname + '/database/';
global.__dirMiddleware = __dirname + '/middleware/';
global.__dirUtil = __dirname + '/util/';

global.throwUserDefineError = function(errorMessage, errorCode = 500) {
	next({ 'errorMessage': errorMessage, 'errorCode': errorCode });
}