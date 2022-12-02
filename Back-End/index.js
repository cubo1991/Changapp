const server = require("./src/app.js");
const { conn, UserRol, User, Supplier, Service, Review, Category } = require("./src/db.js");
const rols = require("./Datos/UserRols.json")
const users = require("./Datos/Users.json")
const suppliers = require("./Datos/Suppliers.json")
const services = require("./Datos/Services.json")
const reviews = require("./Datos/reviews.json")
const categories = require("./Datos/Categories.json")

conn
  .sync({ force: true })
  .then(() => {
    server.listen(3001, () => {
      console.log("%s listening at 3001");
    });
  })
  .then(async () => {
    //Rols
    rols.forEach(async (rol) => await UserRol.create(rol));
    //Users
    users.forEach(async (user) =>await User.create(user)); 
    //Proveedores
    suppliers.forEach(async (supplier) =>await Supplier.create(supplier))
    //Services
    services.forEach(async (service) =>await Service.create(service))
    //Reviews
    reviews.forEach(async (review) =>await Review.create(review))
    //Category
    categories.forEach(async (category) =>await Category.create(category))


    //Relaciones Rotas
/*     const rolPrueba = await UserRol.create({
      name: "prueba"
    }); 
     const user = await User.create({
      userName: "Nicolas",
      passWord: "1234",
      age: 4,
    });
 
    await user.setUserRol(rolPrueba) */
    
  })
