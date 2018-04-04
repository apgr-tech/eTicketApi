'use strict';
module.exports = (sequelize, DataTypes) => {
  var Passenger = sequelize.define('Passenger', {
    type: DataTypes.INT,
    cardId: DataTypes.INT,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    doc_type: DataTypes.STRING,
    document: DataTypes.STRING
  }, {});
  Passenger.associate = function(models) {
    // associations can be defined here
  };
  return Passenger;
};