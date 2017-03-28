'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
      validate: {
        min: 0
      }
    },

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

    date_created: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    },

    user_type: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'Standard'
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};