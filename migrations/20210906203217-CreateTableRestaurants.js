'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('restaurants',{
      id: {type:Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      image: Sequelize.STRING,
      restaurantName: Sequelize.STRING,
      description: Sequelize.TEXT,
      address: Sequelize.STRING,
      openHour: Sequelize.STRING,
      closeHour: Sequelize.STRING,
      capacity: Sequelize.INTEGER,
      status: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,

    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('restaurants');
  }
};
