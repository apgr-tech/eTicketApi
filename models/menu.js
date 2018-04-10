'use strict';
module.exports = (sequelize, DataTypes) => {
    var Menu = sequelize.define('Menu', {
        label: DataTypes.STRING,
        parentId: DataTypes.INTEGER,
        //target: DataTypes.STRING,
        component: DataTypes.STRING,
        order: DataTypes.INTEGER,
        active: DataTypes.BOOLEAN
    }, {});
    Menu.associate = function(models) {
        Menu.hasMany(models.MenuPermission);
        Menu.hasMany(Menu,{as:'subMenus', foreignKey: 'parentID', sourceKey: 'id'});
    };
    return Menu;
};