import Sequelize from 'sequelize';
const sequelize = new Sequelize();

class BaseModel extends Sequelize.Model {
	static init(sequelize, Sequelize) {
		return super.init(
			this.field_defination,
			{
				tableName: this.table_name,
				sequelize
			}
		);
	}

	static getById(modelId) {
		return this.findOne({
			where: { id: modelId }
		});
	}
}

module.exports = BaseModel;
