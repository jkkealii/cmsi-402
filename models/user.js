'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
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
    }
  }, {
    classMethods: {
      associate: function(models) {
        // defining many-to-many relationship (user's favorite serials <--> serials)
        models.User.belongsToMany(models.Serial, {
          as: 'Favorites',
          through: 'serial_contributors'
        });

        models.Serial.belongsToMany(models.User, {
          as: 'Favorited',
          through: 'serial_contributors'
        });

        // defining many-to-many relationship (user's topic interests <--> topics)
        models.User.belongsToMany(models.Topic, {
          as: 'Interests',
          through: 'user_topics'
        });

        models.Topic.belongsToMany(models.User, {
          as: 'InterestedUsers',
          through: 'user_topics'
        });
      }
    }
  });
  return User;
};

