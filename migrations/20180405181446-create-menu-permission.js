'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('MenuPermissions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            roleId: {
                type: Sequelize.INTEGER
            },
            menuId: {
                type: Sequelize.INTEGER
            },
            canCreate: {
                type: Sequelize.BOOLEAN
            },
            canRead: {
                type: Sequelize.BOOLEAN
            },
            canUpdate: {
                type: Sequelize.BOOLEAN
            },
            canDelete: {
                type: Sequelize.BOOLEAN
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('MenuPermissions');
    }
};