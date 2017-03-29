'use strict';
module.exports = function(sequelize, DataTypes) {
  var CommentThread = sequelize.define('CommentThread', {
    comment: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CommentThread;
};