//  const { Router } = require("express");
//  const router = Router();
//  const { Supplier, Review, Detail, Contract, Service, fn, conn} = require("../db.js");

//  router.get("/", async (req, res, next) => {
//   try{

//     const result = await Supplier.findAll(
//       {
//           include: [
//             { model: Review, attributes: [] },
//             { model: Detail },
//             { model: Contract, attributes: [] },
//             {
//               model: Service,
//               attributes: [
//                 "serviceType",
//                 "pricePerHour",
//                 "description",
//                 "representative_image",
//               ],
//             },
//           ],
//           attributes: {
//             include: [
//               [fn("COALESCE", fn("AVG", conn.col("Reviews.rating")), 0), "avgRating"],
//               [fn("COUNT", conn.col("Reviews.rating")), "countRatings"],
//               [fn("COUNT", conn.col("Contracts.id")), "countContracts"],
//             ],
//           },
//           group: [
//             "Supplier.id",
//             "Detail.id",
//             "Contracts.id",
//             "Services.id",
//             "Services->SupplierService.id",
//           ],
//       }
//     )
//     return res.json(result)

//   }catch(err){
//     next(err)
//   }
// })

// module.exports = router;

// // router.post("/", async (req, res) => {
// //   try {
// //     console.log(req.body)
// //     const { name, cuit, description, location, adress, phoneNumber, eMail, formData } =
// //       req.body;
// //     if (
// //       !name ||
// //       !cuit ||
// //       !description ||
// //       !location ||
// //       !adress ||
// //       !phoneNumber ||
// //       !eMail
// //     )
// //       return res.status(404).send("Faltan datos obligatorios por cargar");

// //       if(formData) console.log(formData);

// //     let suppDB = await Supplier.create({
// //       name,
// //       cuit,
// //       description,
      
// //     });
// //     let detailsSupDB = await Detail.create({
// //       location: location,
// //       adress: adress,
// //       phoneNumber: phoneNumber,
// //       eMail: eMail,
// //     });
// //     await suppDB.setDetail(detailsSupDB);
// //     res.status(200).send("Proveedor creado exitosamente");
// //   } catch (error) {
// //     res.status(500).send("Hubo un error en el servidor");
// //   }
// // });

// // module.exports = router;
