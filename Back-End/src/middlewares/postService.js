const { Service, Supplier } = require('../db.js');

const { Router } = require('express');
const router = Router();

router.post('/', async (req, res, next) => {
  try{

    const { supplierId, serviceType, pricePerHour, description } = req.body;

    const newService = await Service.create({
        serviceType,
        pricePerHour,
        description
    })

    await newService.addSupplier(supplierId)

    return res.json("Se ha agregado satisfactoriamente")
    
  }catch(error){
    next(error);
  }
})

module.exports = router;