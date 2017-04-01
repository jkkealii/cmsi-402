'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Serials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      paranoid: true,
      
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
      },

      views: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isInt: true,
          min: 0
        }
      },

      fav_count: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isInt: true,
          min: 0
        }
      },

      description: {
        type: Sequelize.STRING
      },

      // first half of one-to-many relationship (serial's creator --> users)
      creator: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },

      // first half of one-to-many relationship (serial's topic --> topics)
      topic: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: Topic,
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Serials');
  }
};