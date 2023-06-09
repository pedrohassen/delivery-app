'use strict';

module.exports = (sequelize, DataTypes) => {
  const usersModel = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    }, {
      sequelize,
      timestamps: false,
      underscored: true,
    });

  usersModel.associate = function(models) {
    usersModel.hasMany(models.Sale, {
      foreignKey: 'userId',
      as: 'buyer',
    });

    usersModel.hasMany(models.Sale, {
      foreignKey: 'sellerId',
      as: 'seller',
    });
  }

  return usersModel;
}
