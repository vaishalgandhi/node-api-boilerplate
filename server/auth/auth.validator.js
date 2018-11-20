const { buildCheckFunction } = require("express-validator/check");

const checkBodyAndQuery = buildCheckFunction(["body", "query"]);
const { validationErrorHandler } = require(`${__dirUtil}/helpers`);

exports.register = [
    checkBodyAndQuery("firstName")
        .trim()
        .escape()
        .exists({ checkFalsy: true })
        .withMessage("First name field is required"),
    checkBodyAndQuery("lastName")
        .trim()
        .escape()
        .exists({ checkFalsy: true })
        .withMessage("Last name field is required"),
    checkBodyAndQuery("email")
        .trim()
        .exists({ checkFalsy: true })
        .withMessage("Email field is requied"),
    checkBodyAndQuery("email")
        .trim()
        .isEmail()
        .withMessage("Please enter valid email address"),
    validationErrorHandler,
];
