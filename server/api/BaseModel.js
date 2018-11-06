import Sequelize from "sequelize";

class BaseModel extends Sequelize.Model {
    static getById(modelId) {
        return this.findOne({
            where: { id: modelId },
        });
    }
}

module.exports = BaseModel;
