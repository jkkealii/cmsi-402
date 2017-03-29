'use strict';
module.exports = function(sequelize, DataTypes) {
  var Serial = sequelize.define('Serial', {
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
    }
  }, {
    classMethods: {
      associate: function(models) {
        // second half of one-to-many relationship from perspective of User
        models.User.hasMany(models.Serial, {foreignKey: 'creator'});

        // another way? of defining the first half of the one-to-many relationship? maybe?
        // Serial.belongsTo(User, {foreignKey: 'creator', targetKey: 'id'});

        // second half of one-to-many relationship from perspective of Topic
        models.Topic.hasMany(models.Serial, {foreignKey: 'topic'});

        // defining many-to-many relationship (serial's videos <--> videos)
        models.Video.belongsToMany(models.Serial, {
          as: 'Serials',
          through: 'serial_videos'
        });

        models.Serial.belongsToMany(models.Video, {
          as: 'Videos',
          through: 'serial_videos'
        });

        // defining many-to-many relationship (serial's contributers <--> users)
        models.User.belongsToMany(models.Serial, {
          as: 'Contributed',
          through: 'serial_contributors'
        });

        models.Serial.belongsToMany(models.User, {
          as: 'Contributors',
          through: 'serial_contributors'
        });

        // defining many-to-many relationship (serial's comments <--> comment threads)
        models.CommentThread.belongsToMany(models.Serial, {
          as: 'Serials',
          through: 'serial_comments'
        });

        models.Serial.belongsToMany(models.CommentThread, {
          as: 'CommentThreads',
          through: 'serial_comments'
        });
      }
    }
  });
  return Serial;
};

