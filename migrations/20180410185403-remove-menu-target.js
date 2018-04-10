'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Menus', 'target')
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Menus','target', {type: DataTypes.STRING, after: 'parentId'})
    }
};
