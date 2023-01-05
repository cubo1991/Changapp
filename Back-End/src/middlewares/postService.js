const { Service, Supplier, Category } = require('../db.js');
const { uploadMulter, uploadImage } = require ('../controllers/cloudinaryController');
const fs = require("fs-extra");
const { Router } = require('express');
const router = Router();

router.post('/', uploadMulter("./public/Images").single("image"), async (req, res, next) => {
 
    console.log(req.body)
    const { input } = req.body;

    const newService = {
      serviceType: input.name,
      pricePerHour: input.price,
      description: input.description
  }

    // si se cargo un archivo, lo procesamos
    if (req.file) {
      try {
        // subimos a cloudinary
        const result = await uploadImage(req.file.path);
        // borramos el archivo local
        fs.unlink(req.file.path);

        // cargamos en el objeto a guardar la url de cloudinary
        newService.representative_image = result.secure_url;
      } catch (error) {
        // ocurrio un error al cargar la imagen a cloudinary
        console.error("POST /services uploadImage error");

        return next(error);
      }
    }

    try{
    const dbService = await Service.create(newService)

    const supps = input.suppliers.map(s => s.id);

console.log(supps)
    await dbService.addSupplier(supps)
    await dbService.setCategory(parseInt(input.categories))


    return res.json("Se ha agregado satisfactoriamente")
    
  }catch(error){
    next(error);
  }
});

module.exports = router;