'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('orderDetails',{
     id: {type:Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
     userId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    addressId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'addresses',
        key: 'id'
      }
    },
     totalPrice: Sequelize.INTEGER,
     paymentMethod: Sequelize.STRING,
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
     await queryInterface.dropTable('orderDetails');
  }
};
