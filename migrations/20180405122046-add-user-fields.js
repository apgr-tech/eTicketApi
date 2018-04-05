'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return [
            queryInterface.addColumn('Users','name', {type: Sequelize.STRING, after:'hash'}),
            queryInterface.addColumn('Users','lastName', {type: Sequelize.STRING, after:'name'}),
            queryInterface.addColumn('Users','docType', {type: Sequelize.STRING, after:'lastName'}),
            queryInterface.addColumn('Users','document', {type: Sequelize.STRING, after:'docType'})
        ]
    },

    down: (queryInterface, Sequelize) => {
        return [
            queryInterface.renameColumn('Users','name','name_old'),
            queryInterface.renameColumn('Users','lastName', 'lastName_old'),
            queryInterface.renameColumn('Users','docType', 'docType_old'),
            queryInterface.renameColumn('Users','document', 'document_old')
        ]
    }
};
