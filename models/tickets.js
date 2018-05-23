module.exports = function(sequelize, DataTypes) {
  var Tickets = sequelize.define("Tickets", {
    event_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    venue_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    ticket_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Tickets.associate = function(models) {
    Tickets.belongsTo(models.userRcpts, {
      foreignKey: {
        allowNull: true
      }
    });
    Tickets.belongsTo(models.userDonors, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Tickets;
};
