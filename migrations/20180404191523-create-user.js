'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            passengerId: {
                type: Sequelize.INTEGER
            },
            userName: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            docType: {
                type: Sequelize.STRING
            },
            document: {
                type: Sequelize.STRING
            },
            roleId: {
                type: Sequelize.INTEGER
            },
            hash: {
                type: Sequelize.STRING
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
        return queryInterface.dropTable('Users');
    }
};