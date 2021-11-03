'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('orderItems',{
      id: {type:Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      productId: {
       type: Sequelize.INTEGER,
       references: {
         model: 'products',
         key: 'id'
       }
     },
     orderDetailId: {
       type: Sequelize.INTEGER,
       references: {
         model: 'orderDetails',
         key: 'id'
       }
     },
      quanty: Sequelize.INTEGER,
 
    })
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * 
     */
    await queryInterface.dropTable('orderItems');
  }
};
