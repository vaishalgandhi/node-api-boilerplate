import authenticate from "@auth/authenticate.service";

// Authentication middleware is group of two middleware
const middlewareArray = [
    // decodeToken middleware will grab the token from
    // authorization header and check that token is valid
    // if it is valid then it will attach user object in req
    authenticate.decodeToken(),

    // getLoggedInUser middleware will grab the user from
    // req and verify that user and if it is verified
    // then it will attach  the new user object to req
    authenticate.getLoggedInUser(),
];

module.exports = middlewareArray;
