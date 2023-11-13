'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Michael',
      username: 'michael',
      email: 'michael@example.com',
      password: 'michael',
      role: 'admin',
      address: '123 Main St',
      phoneNumber: '1234567890',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
