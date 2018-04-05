'use strict';
module.exports = (sequelize, DataTypes) => {
    var MenuPermission = sequelize.define('MenuPermission', {
        roleId: DataTypes.INTEGER,
        menuId: DataTypes.INTEGER,
        canCreate: DataTypes.BOOLEAN,
        canRead: DataTypes.BOOLEAN,
        canUpdate: DataTypes.BOOLEAN,
        canDelete: DataTypes.BOOLEAN
    }, {});
    MenuPermission.associate = function(models) {
        return [
            MenuPermission.belongsTo(models.Menu),
            MenuPermission.belongsTo(models.Role)
        ]
    };
    return MenuPermission;
};