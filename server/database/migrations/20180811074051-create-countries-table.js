

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable("countries", {
        id: {
            allowNull: false,
            autoIncrement: true,
            field: "id",
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            allowNull: false,
            field: "name",
            type: Sequelize.STRING,
        },
        sortname: {
            allowNull: false,
            field: "sortname",
            type: Sequelize.CHAR(3),
        },
        status: {
            field: "status",
            type: Sequelize.TINYINT(1),
            defaultValue: 1,
        },
        createdAt: {
            allowNull: false,
            field: "created_at",
            defaultValue: Sequelize.fn("now"),
            type: Sequelize.DATE,
        },
        updatedAt: {
            field: "updated_at",
            type: Sequelize.DATE,
        },
        deletedAt: {
            field: "deleted_at",
            type: Sequelize.DATE,
        },
    }),

    down: (queryInterface, Sequelize) => queryInterface.dropTable("countries"),
};
