const { Router } = require("express");
const router = Router();
const { Supplier, Op } = require("../db.js");

router.get("/", async (req, res) => {
  const { name } = req.query;
  if (name) {
    //http://localhost:3001/suppliers?name=Techos
    const result = await Supplier.findAll({
      where: {
        name: {
          [Op.substring]: name,
        },
      },
    });
    if (result.length === 0) res.send("No hubo resultados para la busqueda");
    else res.send(result);
  } else {
    //http://localhost:3001/suppliers
    const result = await Supplier.findAll();
    res.send(result);
  }
});


router.post("/", async (req, res) => {
  const { name, cuit, description } = req.body;
  if(name,cuit,description){
  try {
    await Supplier.create({
      name,
      cuit,
      description,
    });
    res.json("Supplier created successful")
  } catch (e) {
    res.status(500).json("error in data provided")
  }
} else{
  res.status(404).json("Missing data")
}
});


module.exports = router;
