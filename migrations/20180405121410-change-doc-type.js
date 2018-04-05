'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Passengers', 'doc_type', 'docType');
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.renameColumn('Passengers', 'docType', 'doc_type');
  }
};
