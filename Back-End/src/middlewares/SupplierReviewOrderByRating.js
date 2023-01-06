// const e = require("express");
// const { Router } = require("express");
// const router = Router();
// const { Supplier, Detail, Service, Review, Op } = require("../db.js");


// router.get("/orderSuppliers", async (req, res) => {
  
//   //try {
//       const suppliersDB = await Supplier.findAll({
//         include: [
//           {
//             model: Detail,
//           },
//           {
//             model: Service,
//           },
//         ],
//       });
//       //Traer reviews de cada servicio
//       let result = [];
//       for (let i = 0; i < suppliersDB.length; i++) {
//         const reviews = await Review.findAll({
//           include: {
//             model: Service,
//             where: {
//               id: suppliersDB[i].dataValues.Services[0].dataValues.id,
//             },
//           },
//         });
//         //Rating promediado
//         let revireProm = 0;
//         reviews.map(({ rating }) => (revireProm += rating));
//         revireProm = revireProm / reviews.length;

//         let objSupp = {
//           id: suppliersDB[i].dataValues.id,
//           name: suppliersDB[i].dataValues.name,
//           cuit: suppliersDB[i].dataValues.cuit,
//           description: suppliersDB[i].dataValues.description,
//           detail: suppliersDB[i].dataValues.Detail,
//           Services: suppliersDB[i].dataValues.Services,
//           Rating: revireProm,
//         };
//         result.push(objSupp);
//       }
//       let resultWithoutNulls = result.filter(e => !(isNaN(e.Rating)))
//       let resultEithNulls = result.filter(e => isNaN(e.Rating))
//       resultWithoutNulls.sort(((a, b) =>  b.Rating - a.Rating));
//       const newResult = [...resultWithoutNulls, ...resultEithNulls]
//       res.status(200).json(newResult);
// /*     } catch (error) {
//       res.status(500).send("Hubo un error en el servidor");
//     } */
//   });
  


// module.exports = router;
