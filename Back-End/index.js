const server = require("./src/app.js");
const { conn, UserRol, User, Supplier, Service, Category, Detail, Review, Op } = require("./src/db.js");
const rols = require("./Datos/UserRols.json")
const users = require("./Datos/Users.json")
const suppliers = require("./Datos/Suppliers.json")
const services = require("./Datos/Services.json")
const categories = require("./Datos/Categories.json")
const details = require("./Datos/Details.json")

conn
  .sync({ force: false })
  .then(() => {
    server.listen(3001, () => {
      console.log("%s listening at 3001");
    });
  })
/*   .then(async () => {
    let supplietUUID = []
    //Details
    details.forEach(async (detail) =>await Detail.create(detail))
    //Category
    categories.forEach(async (category) =>await Category.create(category))
    //Rols
    rols.forEach(async (rol) => await UserRol.create(rol));
    //Users
    users.forEach(async (user) =>{
      let userBD = await User.create(user)
      await userBD.setUserRol(2)
      await userBD.setDetail(1)
    }); 
    //ProveedoresLimpieza S.A.
    suppliers.forEach(async (supplier) =>{
      let suppliersBD = await Supplier.create(supplier)
      await suppliersBD.setDetail(2)
      supplietUUID.push(suppliersBD.dataValues.id)
    })
    //Services
    services.forEach(async (service) =>{
      let serviceBD = await Service.create(service)
      let fistWord = service.serviceType.split(" ")
      if(fistWord[0] === "Reparacion") {
        await serviceBD.setCategory(1)
      } else {
        await serviceBD.setCategory(2)
      }
      if(fistWord[2] === "Techos") {
        await serviceBD.addSupplier(supplietUUID[3])
      } else if(fistWord[2] === "Paredes"){
        await serviceBD.addSupplier(supplietUUID[1])
      } else if(fistWord[2] === "Hogares" || fistWord[2] === "Hospitales") {
        await serviceBD.addSupplier(supplietUUID[0])
      } else {
        await serviceBD.addSupplier(supplietUUID[2])
      }
      
    })
  }) */
/* 
  .then(async () => {
    const result = await Review.findAll({
      order:[
        [conn.cast(conn.col('rating'), 'INTEGER'), "DESC"]
      ],
      include: {
        model: Service,
        where: {
          name: "Limpieza de Cloacas"
        }
      }
    })

    console.log(result);
  }) */