const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define('restaurants', {
    id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    image: DataTypes.STRING,
    restaurantName: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    openHour: DataTypes.STRING,
    closeHour: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    status: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
});