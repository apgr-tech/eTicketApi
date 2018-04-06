'use strict';
module.exports = (sequelize, DataTypes) => {
    var Passenger = sequelize.define('Passenger', {
        type: DataTypes.INTEGER,
        cardId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
        docType: DataTypes.STRING,
        document: DataTypes.STRING
    }, {});
    Passenger.associate = function(models) {
        // associations can be defined here
    };
    return Passenger;
};