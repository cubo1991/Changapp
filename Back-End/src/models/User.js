const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userName: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        //   isAlpha: true,
        // },
      },
      passWord: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      age: { // breaks only userHandler
        type: DataTypes.INTEGER,
        //allowNull: false,
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
        type: DataTypes.STRING,
        defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEbo912SNlE28OayU-KnDZqjV5-KU3XqY-A&usqp=CAU'
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      email_verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },

    },
    {
      timestamps: false,
    }
  );
};
