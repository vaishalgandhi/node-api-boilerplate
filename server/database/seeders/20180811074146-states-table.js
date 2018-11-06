

const _ = require("lodash");
const statesArray = require("./data/states").states;

const stateChunk = _.chunk(statesArray, 10);

module.exports = {
    up: (queryInterface, Sequelize) => {
        _.each(stateChunk, (item, key) => {
            queryInterface.bulkInsert("states", item, {});
        });
    },

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete("states", null, {}),
};
