// const { Service, Supplier } = require('../db.js');

// const updateService = async (servicesId) => {

//   try{
//     for(let i=0; i<servicesId.length;i++){
//         let acum=0;
//         const service = await Service.findByPk(servicesId[i],{
//           include: [{
//             model: Supplier
//           }]
//         });
      
//       await service.Suppliers?.map(s => {
//         acum=acum+s.stock
//       });
      
//       if(acum === 0) {
//         await Service.update({
//           disponible: false
//         }, {
//           where:{
//             id: servicesId[i]
//           }
//         });
//       } else {
//         await Service.update({
//           disponible: true
//         }, {
//           where:{
//             id: servicesId[i]
//           }
//         });
//       }   
//     }
//     return;
//   }  catch(e){
//         console.log(e);
//         throw e;
//   } 
// }

// module.exports = {
//     updateService
//   };