'use strict';
module.exports = (sequelize, DataTypes) => {
  var Roles = sequelize.define('Role', {
    name: DataTypes.STRING
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
  };
  return Roles;
};