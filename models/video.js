'use strict';
module.exports = function(sequelize, DataTypes) {
  var Video = sequelize.define('Video', {
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

    youtube_id: {
      type: Sequelize.STRING,
      allowNull: false,
      notEmpty: true,
      unique: {
        args: true,
        msg: 'Video id already stored in database!'
      }
    },

    vote_count: {
      type: Sequelize.BIGINT,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isInt: true,
        min: 0
      }
    },

    use_count: {
      type: Sequelize.BIGINT,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isInt: true,
        min: 0
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Video;
};