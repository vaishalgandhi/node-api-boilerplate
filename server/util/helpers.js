const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const { validationResult, } = require("express-validator/check");
const logger = require(`${__dirUtil}/logger`);

const helpers = {};

// Handler for any validation error occurs
helpers.validationErrorHandler = (req, res, next) => {
    const errors = validationResult(req);
    const errorArray = [];

    if (!errors.isEmpty()) {
        _.each(errors.mapped(), (error) => {
            errorArray.push(error.msg);
        }).errors;

        return res.status(422).json({ errors: errorArray, });
    }

    return next();
};

// Handler for any sequelize error occurs
helpers.sequelizeErrorHandler = (sequelizeError) => {
    if (typeof sequelizeError === "object") {
        if (sequelizeError.hasOwnProperty("errors")) {
            const errorArray = [];
            _.each(sequelizeError.errors, function(element, key) {
                errorArray.push(element.message);
            });

            logger.error(errorArray);

            return errorArray;
        }
    }

    logger.error(sequelizeError);

    return ["something went wrong", ];
};

// Generate random number of specified length
helpers.randomNumber = (length) => {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
};

// Loop through all models
// searching suffix as model.js
helpers.loadAllModel = (base, files, result) => {
    files = files || fs.readdirSync(base)
    result = result || []

    files.forEach(
        function (file) {
            var newbase = path.join(base,file)
            if ( fs.statSync(newbase).isDirectory() )
            {
                result = helpers.loadAllModel(newbase, fs.readdirSync(newbase), result)
            }
            else
            {
                if (file.slice(-9) === '.model.js')
                {
                    result.push(newbase)
                }
            }
        }
    )

    return result;
};

// This will clean up model code and internally
// convert sequlieze 4.0 to lower version code
// For example sequelize.define
helpers.sanitizeModel = (sequelize, Model) => {
    const SanitizedModel = sequelize.define(Model.name, Model.definition, Model.modelOptions);
    const [, , , ...props] = Object.getOwnPropertyNames(Model);
    const [, ...protos] = Object.getOwnPropertyNames(Model.prototype);

    for (const prop of props) {
        Object.defineProperty(SanitizedModel, prop, {
            ...Object.getOwnPropertyDescriptor(Model, prop),
        })
    }

    for (const proto of protos) {
        Object.defineProperty(SanitizedModel.prototype, proto, {
            ...Object.getOwnPropertyDescriptor(Model.prototype, proto),
        })
    }

    return SanitizedModel;
};

module.exports = helpers;
