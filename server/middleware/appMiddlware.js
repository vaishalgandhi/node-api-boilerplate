const expressLimiter = require('express-limiter');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const override = require('method-override');

// setup global middleware here
module.exports = function(app) {
	// Limiting the number of request
	const limiter = expressLimiter(app);
	limiter(app, {
	  total: 60, // Allowed Number pf request before limits get expired
	  expire: 1000 * 60 // Limits gets expired in defined miliseconds
	});

	// Parse incoming request data
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // Allowing cross-origin request by allowing preflight-check request
  app.use(cors());

  // Securing express app by setting various HTTP headers
  app.use(helmet());

  // Use HTTP verbs such as PUT or DELETE in places where the client doesn't support it
  app.use(override());
};
