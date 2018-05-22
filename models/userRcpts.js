module.exports = function(sequelize, DataTypes) {
    var userRcpts = sequelize.define("userRcpts", {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      street_address: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      zip_code: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      AARP_num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      DOB: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
      
    });

    userRcpts.associate = function(models){
      userRcpts.hasMany(models.Tickets, {
        onDelete: "cascade"
      })
    };


    return userRcpts;
  };
  