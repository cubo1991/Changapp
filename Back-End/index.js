const server = require("./src/app.js");
const { conn, UserRol, User, Supplier, Service, Category, Detail, Review, Op } = require("./src/db.js");
const rols = require("./Datos/UserRols.json")
const users = require("./Datos/Users.json")
const suppliers = require("./Datos/Suppliers.json")
const services = require("./Datos/Services.json")
const categories = require("./Datos/Categories.json")
const details = require("./Datos/Details.json")

conn
  .sync({ force: true })
  .then(() => {
    server.listen(3001, () => {
      console.log("%s listening at 3001");
    });
  })
.then(async () => {
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
      let userName = userBD.dataValues.userName
      if(userName === "Nicolas" || userName === "Kevin" || userName === "Nadia"){
        await userBD.setUserRol(3)
      } else {
        await userBD.setUserRol(2)
      }
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
      let description = service.description
      if(fistWord[0] === "Reparación") {
        await serviceBD.setCategory(1)
      } else if(fistWord[0] === "Limpieza"){
        await serviceBD.setCategory(2)
      } else if(fistWord[0] === "Lavado"){
        await serviceBD.setCategory(3)
      }else if(fistWord[0] === "Planchado"){
        await serviceBD.setCategory(4)
      }else if(description.includes('espacios verdes') || description.includes('árboles') || description.includes('jardines')){
        await serviceBD.setCategory(5)
      }else if(fistWord[0] === "Desinfección"){
        await serviceBD.setCategory(6)
      }
      else if(fistWord[0] === "Fumigación"){
        await serviceBD.setCategory(7)
      }
      else if(fistWord[0] === "Plomería" || fistWord[0] === "Termotanques"){
        await serviceBD.setCategory(8)
      }  else if(fistWord[0] === "Electricidad" || fistWord[0] === "Aires"){
        await serviceBD.setCategory(9)
      }else if(fistWord[0] === "Pintura"){
        await serviceBD.setCategory(10)
      }else if(fistWord[0] === "Construcción" || fistWord[0] === "Aberturas" || fistWord[0] === "Durlock"){
        await serviceBD.setCategory(11)
      }
      else if(fistWord[0] === "Herrería"){
        await serviceBD.setCategory(12)
      }else if(fistWord[0] === "Carpintería"){
        await serviceBD.setCategory(13)
      }
      else await serviceBD.setCategory(14)
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
  })