const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('Review', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
    comment: {
      type: DataTypes.STRING,
    },
    rating: {
        type: DataTypes.FLOAT
    }
  },
  {
    timestamps: false
  });
};