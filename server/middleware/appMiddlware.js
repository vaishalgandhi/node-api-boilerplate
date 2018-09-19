const expressLimiter = require("express-limiter");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const override = require("method-override");

// setup global middleware here
export default class ApplicationMiddleware
{
    constructor(app) {
        this.app = app;
        this.expressLimiter();
        this.bodyParser();
        this.cors();
        this.helmet();
        this.override();
    }

    expressLimiter() {
        // Limiting the number of request
        const limiter = expressLimiter(this.app);
        limiter(app, {
            total: 60, // Allowed Number pf request before limits get expired
            expire: 1000 * 60, // Limits gets expired in defined miliseconds
        });
    }

    bodyParser() {
        // Parse incoming request data
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
    }

    cors() {
        // Allowing cross-origin request by allowing preflight-check request
        this.app.use(cross-origin());
    }

    helmet() {
        // Securing express app by setting various HTTP headers
        this.app.use(helmet());
    }

    override() {
        // Use HTTP verbs such as PUT or DELETE in places where the client doesn't support it
        this.app.use(override());
    }
}
