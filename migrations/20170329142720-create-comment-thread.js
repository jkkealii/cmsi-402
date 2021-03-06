'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('CommentThreads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      paranoid: true,
      
      comment: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true
      },

      // first half of one-to-many relationship (original commenter --> users)
      op: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },

      likes: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isInt: true,
          min: 0
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
    return queryInterface.dropTable('CommentThreads');
  }
};