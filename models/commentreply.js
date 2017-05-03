'use strict';
module.exports = function(sequelize, DataTypes) {
  var CommentReply = sequelize.define('CommentReply', {
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
    }
  }, {
    classMethods: {
      associate: function(models) {
        // second half of one-to-many relationship from perspective of User
        models.User.hasMany(models.CommentReply, {foreignKey: 'op'});
      }
    }
  });
  return CommentReply;
};