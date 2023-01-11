const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Receipt", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    buy_item:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    buy_pricePerHour:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    buy_amount:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    buyer_name: {
        type: DataTypes.STRING,
    },
    buyer_phone: {
        type: DataTypes.BIGINT,
    },
    buyer_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    buyer_adress: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    buyer_location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    buyer_CP: {
        type: DataTypes.INTEGER,
    },
    preference_time:{
        type: DataTypes.STRING,
    }
});
};