const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('Supplier', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuit: {
      type: DataTypes.BIGINT,
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