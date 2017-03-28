'use strict';
module.exports = function(sequelize, DataTypes) {
  var Topic = sequelize.define('Topic', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      notEmpty: true,
      unique: {
        args: true,
        msg: 'Topic already exists!'
      }
    },

    count: {
      type: Sequelize.BIGINT,
      allowNull: false,
      validate: {
        isInt: true,
        min: 0
      }
    }

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
  return Topic;
};