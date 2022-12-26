// const { Router } = require("express");
// const router = Router();
// const { Supplier, Detail, Service, Review, Op } = require("../db.js");
// const sequelize = require("sequelize");

// router.post("/", async (req, res) => {
//   try {
//     console.log(req.body)
//     const { name, cuit, description, location, adress, phoneNumber, eMail, formData } =
//       req.body;
//     if (
//       !name ||
//       !cuit ||
//       !description ||
//       !location ||
//       !adress ||
//       !phoneNumber ||
//       !eMail
//     )
//       return res.status(404).send("Faltan datos obligatorios por cargar");

//       if(formData) console.log(formData);

//     let suppDB = await Supplier.create({
//       name,
//       cuit,
//       description,
      
//     });
//     let detailsSupDB = await Detail.create({
//       location: location,
//       adress: adress,
//       phoneNumber: phoneNumber,
//       eMail: eMail,
//     });
//     await suppDB.setDetail(detailsSupDB);
//     res.status(200).send("Proveedor creado exitosamente");
//   } catch (error) {
//     res.status(500).send("Hubo un error en el servidor");
//   }
// });

// module.exports = router;
