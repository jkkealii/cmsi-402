'use strict';
module.exports = function(sequelize, DataTypes) {
  var Serial = sequelize.define('Serial', {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      allowNull: false,
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

    date_created: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Serial;
};