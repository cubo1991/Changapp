const { Router } = require("express");
const router = Router();
const { Supplier, Op } = require("../db.js");

router.get("/", async (req, res, next) => {
  try{
    
      const {name} = req.query
    if (name) {
      //http://localhost:3001/suppliers?name=Techos
      const result = await Supplier.findAll({
          where: {
              name : {
                  [Op.substring]: name
              }
          }
      });
      if(result.length === 0 ) res.send("No hubo resultados para la busqueda");
      else res.send(result);
    } else {
      //http://localhost:3001/suppliers
      const result = await Supplier.findAll();
      res.send(result);
    }

  }catch(error){
    next(error)
  }
});

module.exports = router;
