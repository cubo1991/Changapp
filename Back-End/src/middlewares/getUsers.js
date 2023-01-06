const { Router } = require('express');
const { User } = require('../db.js');

const router = Router();

router.get("/", async (req, res, next) => {

  try{

    const result = await User.findAll()

    if(result.length > 0) return res.json(result);

    return res.send("No hay usuarios en nuestra base de datos");
    
  }catch(error){
    next(error);
  }

})

module.exports = router;