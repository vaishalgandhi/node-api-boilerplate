import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const ModelHelpers = {};

// Loop through all models
// searching suffix as model.js
ModelHelpers.loadAllModel = (base, files, result) => {
    files = files || fs.readdirSync(base)
    result = result || []

    files.forEach(
        function (file) {
            var newbase = path.join(base,file)
            if ( fs.statSync(newbase).isDirectory() )
            {
                result = ModelHelpers.loadAllModel(newbase, fs.readdirSync(newbase), result)
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
ModelHelpers.sanitizeModel = (sequelize, Model) => {
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

module.exports = ModelHelpers;
