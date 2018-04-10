'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Menus', 'order', {type:Sequelize.INTEGER, after:'component'})
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Menus', 'order')
    }
};
