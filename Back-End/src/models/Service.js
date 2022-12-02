const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('Service', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    serviceType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pricePerHour: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  });
};