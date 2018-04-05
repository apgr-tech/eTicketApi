'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Passengers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            type: {
                type: Sequelize.INTEGER
            },
            cardId: {
                type: Sequelize.INTEGER
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
        return queryInterface.dropTable('Passengers');
    }
};