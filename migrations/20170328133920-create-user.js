'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
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

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        },
        unique: {
          args: true,
          msg: 'Email address already in use!'
        }
      },

      username: {
        type: Sequelize.STRING, 
        allowNull: false,
        notEmpty: true,
        unique: {
          args: true,
          msg: 'Username already in use!'
        }
      },

      password: {
        type: Sequelize.STRING, 
        allowNull: false,
        notEmpty: true,
        validate: {
          min: 5
        }
      },

      user_type: {
        type: Sequelize.ENUM('Standard', 'Admin', 'YouTuber'),
        allowNull: false,
        defaultValue: 'Standard'
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
    return queryInterface.dropTable('Users');
  }
};