import expressLimiter from "express-limiter";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import override from "method-override";
import compression from "compression";

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
        this.compression();
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

    // Attempt to compress response bodies
    compression() {
        this.app.use(
            compression({
                filter: (req, res) => {
                    if (req.headers["x-no-compression"]) {
                        // don't compress responses with this request header
                        return false;
                    }

                    // fallback to standard filter function
                    return compression.filter(req, res);
                },
            }),
        );
    }
}

module.exports = new ApplicationMiddleware();
