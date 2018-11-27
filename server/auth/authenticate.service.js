import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";
import logger from "@util/logger";
import { User } from "@db/db-connect";
import config from "@config";
import GeneralError from "@util/generalError";

const checkToken = expressJwt({ secret: config.jwt_key });

class AuthMiddleware {
    decodeToken() {
        return (req, res, next) => {
            // Token can be passed in header or query string
            // so if token is passed in query string then add that
            // token in header authorization
            if (req.query && req.query.hasOwnProperty("access_token")) {
                req.headers.authorization = `Bearer ${req.query.access_token}`;
            }

            // This is pre-defined middleware by express-jwt which will
            // send error back using res/next if not valid
            // or if it is valid thenattach attach the user object in req
            checkToken(req, res, next);
        };
    }

    getLoggedInUser() {
        return (req, res, next) => {
            User.findById(req.user.id)
                .then((user) => {
                    if (!user) {
                        // Check if token is decoded but that user
                        // is not found in out database
                        logger.error("User not found");
                        next(new GeneralError("Unauthorized! User not found", 401));
                    } else {
                        // If user is found then update req.user object
                        req.user = user;
                        next();
                    }
                }, (err) => {
                    next(err);
                });
        };
    }

    verifyUser() {
        return (req, res, next) => {
            const email = req.body.email;
            const password = req.body.password;

            // if no email or password then send
            if (!email || !password) {
                throw new GeneralError("You need a email and password", 400);
            }

            // look user up in the DB so we can check
            // if the passwords match for the email
            User.findOne({ where: { email } })
                .then((user) => {
                    if (!user) {
                        logger.error("No user with the given email");
                        next(new GeneralError("No user with the given email", 401));
                    } else {
                        // Comparing hash password
                        if (!user.authenticate(password)) {
                            logger.error("Wrong password");
                            next(new GeneralError("Wrong password", 401));
                        } else {
                            // if everything is good,
                            // then attach to req.user
                            // and call next so the controller
                            // can sign a token from the req.user.id
                            req.user = user;
                            next();
                        }
                    }
                }).catch((error) => {
                    next(error);
                });
        };
    }

    signToken(user) {
        return jwt.sign(
            { id: user.id },
            config.jwt_key,
            { expiresIn: config.jwt_timeout },
        );
    }
}

module.exports = new AuthMiddleware();
