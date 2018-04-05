'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        passengerId: DataTypes.INTEGER,
        userName: DataTypes.STRING,
        email: DataTypes.STRING,
        role: DataTypes.INTEGER,
        name: DataTypes.STRING,
        lastName: DataTypes.STRING,
        docType: DataTypes.STRING,
        document: DataTypes.STRING,
        hash: DataTypes.STRING
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};