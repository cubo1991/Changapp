const { Router } = require("express");
const router = Router();
const { Supplier, Detail,  Op } = require("../db.js");

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      //http://localhost:3001/suppliers?name=Techos
      const result = await Supplier.findAll({
        where: {
          name: {
            [Op.substring]: name,
          },
        },
        include: {
          model : Detail,
          attributes: ["location"]
        }
      });
      if (result.length === 0) res.status(404).send("No hubo resultados para la busqueda");
      else res.status(200).json(result);
    } else {
      //http://localhost:3001/suppliers
      const result = await Supplier.findAll({
        include: Detail
      });
      res.status(200).json(result);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, cuit, description,location, adress, phoneNumber, eMail } = req.body;
    if(!name, !cuit, !description, !location, !adress, !phoneNumber, !eMail) res.status(404).send("Faltan datos obligatorios por cargar")
    let suppDB = await Supplier.create({
      name,
      cuit,
      description,
    });
    let detailsSupDB = await Detail.create({
      location: location,
      adress: adress,
      phoneNumber: phoneNumber,
      eMail: eMail
    })
    await suppDB.setDetail(detailsSupDB)
      res.status(200).send("Proveedor creado exitosamente");
  } catch (error) {
    res.status(500).send("Hubo un error en el servidor")
  }
});

module.exports = router;
