'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'kavin',
          password:
            '$2a$16$NupLRA4rtlAIk//C1nQMne8XjRgOyD.Rh5gcLAJM5CfbxgwQwe27y',
          accountId: 1,
        },
        {
          username: 'danil',
          password:
            '$2a$16$NupLRA4rtlAIk//C1nQMne8XjRgOyD.Rh5gcLAJM5CfbxgwQwe27y',
          accountId: 2,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
