const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define('reservations', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    restaurantId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'restaurants',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    restaurantName: DataTypes.STRING,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    amountPeople: DataTypes.INTEGER,
    table: DataTypes.INTEGER,
    date: DataTypes.STRING,
    hour: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
});