'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Posts', [{
        content : 'My first post',
        updateAt : new Date(),
        createdAt : new Date()
      }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Posts', null, {});
  }
};
