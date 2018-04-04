'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    passengerId: DataTypes.INT,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.INT,
    salt: DataTypes.STRING,
    hash: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};