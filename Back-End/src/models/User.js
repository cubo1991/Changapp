const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: true,
        },
      },
      passWord: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: { // breaks only userHandler
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // AUTH0 normalized
      name: {
        type: DataTypes.STRING
      },
      nickname: {
        type: DataTypes.STRING
      },
      given_name: {
        type: DataTypes.STRING
      },
      family_name: {
        type: DataTypes.STRING
      },
      picture: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      email_verified: {
        type: DataTypes.BOOLEAN
      },

    },
    {
      timestamps: false,
    }
  );
};
