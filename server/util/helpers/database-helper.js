import _ from "lodash";

const DatabaseHelper = {};

// Handler for any sequelize error occurs
DatabaseHelper.sequelizeErrorHandler = (sequelizeError) => {
    if (typeof sequelizeError === "object") {
        if (sequelizeError.hasOwnProperty("errors")) {
            const errorArray = [];
            _.each(sequelizeError.errors, (element, key) => {
                errorArray.push(element.message);
            });

            return errorArray;
        }
    }

    return ["something went wrong"];
};

module.exports = DatabaseHelper;
