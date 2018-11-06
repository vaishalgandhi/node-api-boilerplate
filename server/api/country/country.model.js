import { DataTypes } from "sequelize";

export default class Country {
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
            comment: 'Country name',
        },
        sortname: {
            field: 'sortname',
            type: DataTypes.CHAR(3),
            comment: 'Country short name',
        },
        status: {
            field: 'status',
            type: DataTypes.TINYINT(1),
            defaultValue: 0,
            allowNull: false,
            comment: '0 - inactive, 1 - active',
        },
    }

    static modelOptions = {
        freezeTableName: true,
        tableName: 'countries',
    }

    static defaultScope = {
        where: {
            status: 1,
        },
    }

    static associate(models) {
        this.hasMany(models.State, {
            as: 'State',
            constraints: true,
            foreignKey: {
                name: 'countryId',
                field: 'country_id',
                allowNull: false,
            },
        });
    };
}
