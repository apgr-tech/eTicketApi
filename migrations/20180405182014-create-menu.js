'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Menus', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            label: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            parentId: {
                type: Sequelize.INTEGER,
            },
            target: {
                type: Sequelize.STRING,
            },
            component: {
                type: Sequelize.STRING,
            },
            active: {
                type: Sequelize.BOOLEAN,
                default: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
            .then(() => {
                return queryInterface.addIndex(
                    'Menus',
                    {
                        fields:['label', 'parentId','target','component'],
                        unique:true,
                        name:'menuIndex'
                    }
                )
            })
            ;
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Menus');
    }
};