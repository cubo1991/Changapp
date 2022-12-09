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
    },
    representative_image: {
      type: DataTypes.TEXT,
      defaultValue: 'https://www.shutterstock.com/image-photo/work-tools-on-wooden-background-260nw-1513549190.jpg'
    }
  },
  {
    timestamps: false
  });
};