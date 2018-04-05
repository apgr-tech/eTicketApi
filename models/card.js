'use strict';
module.exports = (sequelize, DataTypes) => {
    var Card = sequelize.define('Card', {
        uid: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
        keyA: DataTypes.STRING,
        keyB: DataTypes.STRING
    }, {});
    Card.associate = function(models) {
        // associations can be defined here
    };
    return Card;
};