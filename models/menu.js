'use strict';
module.exports = (sequelize, DataTypes) => {
    var Menu = sequelize.define('Menu', {
        label: DataTypes.STRING,
        uniqueOne: {type: DataTypes.STRING, unique: 'compositeIndex'},
        uniqueTwo: {type: DataTypes.INTEGER, unique: 'compositeIndex'},
        parentId: DataTypes.INTEGER,
        target: DataTypes.STRING,
        component: DataTypes.STRING,
        active: DataTypes.BOOLEAN
    }, {});
    Menu.associate = function(models) {
        Menu.hasMany(models.MenuPermission)
    };
    return Menu;
};