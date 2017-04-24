'use strict';
module.exports = function(sequelize, DataTypes) {
  var CommentThread = sequelize.define('CommentThread', {
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
    }
  }, {
    classMethods: {
      associate: function(models) {
        // second half of one-to-many relationship from perspective of User
        models.User.hasMany(models.CommentThread, {foreignKey: 'op'});

        // one-to-many relationship (comment thread --> comment reply)
        models.CommentReply.belongsTo(models.CommentThread, {as: 'comment_replies', foreignKey: 'id'});
        CommentThread.hasMany(models.CommentReply);
      }
    }
  });
  return CommentThread;
};