

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable("cities", {
        id: {
            allowNull: false,
            autoIncrement: true,
            field: "id",
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        countryId: {
            allowNull: false,
            field: "state_id",
            type: Sequelize.INTEGER,
        },
        name: {
            field: "name",
            type: Sequelize.STRING(150),
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
    })
        .then(() => {
            queryInterface.addConstraint("cities", ["state_id"], {
                type: "foreign key",
                name: "cities_state_id_foreign",
                references: {
                    table: "states",
                    field: "id",
                },
                onDelete: "cascade",
                onUpdate: "cascade",
            });
        })
        .catch((error) => {
            console.log(error);
        }),

    down: (queryInterface, Sequelize) => queryInterface.dropTable("cities"),
};
