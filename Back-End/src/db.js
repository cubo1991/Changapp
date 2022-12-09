require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST
} = process.env;

const DB_PORT = process.env.DB_PORT || 5432;
const DB_NAME = process.env.DB_NAME || 'PF_ECOMMERCE';

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {    //cambiar la databse
  logging: false,
  native: false,
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach((file) => 
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  );

modelDefiners.forEach( model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Service, Supplier, Category, User, UserRol, Review, Detail} = sequelize.models; //destructurin de los modelos.

//NaN Servicios a Proveedores
Service.belongsToMany(Supplier, { through: "Service_Supplier"},  {timestamps: false})
Supplier.belongsToMany(Service, { through: "Service_Supplier"},  {timestamps: false}) 

//1aN Categorias de servicios
Category.hasMany(Service)
Service.belongsTo(Category)

//NaN Usuarios y servicios
Service.belongsToMany(User, { through: "Service_User"})
User.belongsToMany(Service, { through: "Service_User"}) 

//1aN Usuarios y Roles
UserRol.hasMany(User)
User.belongsTo(UserRol)

//1aN Review y Servicios
Service.hasMany(Review)
Review.belongsTo(Service)
//1aN Review y Users
User.hasMany(Review)
Review.belongsTo(User)

//1a1 Details y Supplier
Detail.hasOne(Supplier)
Supplier.belongsTo(Detail)
//1a1 Details y User
Detail.hasOne(User)
User.belongsTo(Detail) 

module.exports = {
  ...sequelize.models,    // importacion de los modelos
  conn: sequelize,        // importacion de la conexion
  Op,
}