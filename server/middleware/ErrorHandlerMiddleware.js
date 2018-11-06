const logger = require(`${__dirUtil}/logger`);
const { logging } = require(`${__dirServer}/config/`);

module.exports = (error, req, res, next) => {
    logger.error(error);

    // response database error only if logging is true otherwise show internal server error
    if (logging === true) {
        // if error thrown from sequelize
        // when seqquelize can not connect to database
        if (error.name === "SequelizeConnectionRefusedError") {
            return res.status(500).send({ errors: ["Database connection refused"] });
        }
    }

    // if error thrown from jwt validation check
    if (error.name === "UnauthorizedError") {
        return res.status(401).send({ errors: ["Invalid token"] });
    }

    // if error thrown by user defined error
    if (error.name === "GeneralError") {
        return res.status(error.error_code).send({ errors: [error.error_message] });
    }

    return res.status(500).send({ errors: ["Internal Server Error"] });
};
