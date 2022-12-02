const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('UserRol', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true
      }, 
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};