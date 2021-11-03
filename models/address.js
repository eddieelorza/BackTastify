const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define('addresses', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    postCode: DataTypes.INTEGER,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    numTel: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
});