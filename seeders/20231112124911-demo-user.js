'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@example.com',
      password: 'hashedpassword', // Ingat untuk meng-hash password di produksi!
      role: 'user',
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
