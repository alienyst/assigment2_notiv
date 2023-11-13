'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [{
      title: 'Marvel Cinematic Universe',
      synopsis: 'This is an example synopsis',
      trailerUrl: 'http://example.com/trailer',
      imgUrl: 'http://example.com/image.jpg',
      rating: 5,
      status: 'available',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
