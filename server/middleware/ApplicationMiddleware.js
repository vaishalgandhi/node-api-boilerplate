const expressLimiter = require("express-limiter");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const override = require("method-override");

// setup global middleware here
class ApplicationMiddleware {
    // initiallize all middleware and bind it to  application
    init(app) {
        this.app = app;
        this.expressLimiter();
        this.bodyParser();
        this.cors();
        this.helmet();
        this.override();
    }

    // Limiting the number of request
    expressLimiter() {
        const limiter = expressLimiter(this.app);
        limiter(this.app, {
            total: 60, // Allowed Number pf request before limits get expired
            expire: 1000 * 60, // Limits gets expired in defined miliseconds
        });
    }

    // Parse incoming request data
    bodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    // Allowing cross-origin request by allowing preflight-check request
    cors() {
        this.app.use(cors());
    }

    // Securing express app by setting various HTTP headers
    helmet() {
        this.app.use(helmet());
    }

    // Use HTTP verbs such as PUT or DELETE in places where the client doesn't support it
    override() {
        this.app.use(override());
    }
}

module.exports = new ApplicationMiddleware();
