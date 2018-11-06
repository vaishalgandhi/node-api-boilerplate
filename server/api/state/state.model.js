import { DataTypes } from "sequelize";

export default class State {
    static definition = {
        id: {
            type: DataTypes.INTEGER(3).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            comment: 'Primary and auto increment key of the table',
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(191),
            allowNull: false,
            comment: 'State name',
        },
        countryId: {
            field: 'country_id',
            type: DataTypes.INTEGER,
            comment: 'Country short name',
            references: {
                model: 'countries', // Can be both a string representing the table name, or a reference to the model
                key:   "id",
            },
        },
    }

    static modelOptions = {
        freezeTableName: true,
        tableName: 'states',
    }
}
