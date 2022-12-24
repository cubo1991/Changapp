const { Router } = require("express");
const router = Router();
const { Supplier, Detail, Service, Review, Op } = require("../db.js");
const sequelize = require("sequelize");

router.get("/:id?", async (req, res) => {
  const { name } = req.query;
  const { id } = req.params;

  const findQuery = {
    include: [
      { model: Detail },
      {
        model: Service,
        include: {
          model: Review,
        },
      },
    ],
  };
  if (name) findQuery.where = { name: { [Op.substring]: name } };
  if (id) findQuery.where = { id };

  try {
    const suppliersDB = await Supplier.findAll(findQuery);

    if (!suppliersDB.length)
      return res.status(404).send("No hubo resultados para la busqueda");

    let retSuppliers = [];
    for (let i = 0; i < suppliersDB.length; i++) {
      let sumaReviews = 0;
      let countReviews = 0;

      for (let j = 0; j < suppliersDB[i].Services.length; j++) {
        for (let k = 0; k < suppliersDB[i].Services[j].Reviews.length; k++) {
          sumaReviews += suppliersDB[i].Services[j].Reviews[k].rating;
          countReviews++;
        }
      }

      retSuppliers.push({
        ...JSON.parse(JSON.stringify(suppliersDB[i])),
        ratingPromedio: countReviews
          ? parseFloat((sumaReviews / countReviews).toFixed(1))
          : 0,
      });
    }

    return res.status(200).json(retSuppliers);
  } catch (e) {
    console.error(e);
    return res.status(500).send("Hubo un error en el servidor");
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body)
    const { name, cuit, description, location, adress, phoneNumber, eMail, formData } =
      req.body;
    if (
      !name ||
      !cuit ||
      !description ||
      !location ||
      !adress ||
      !phoneNumber ||
      !eMail
    )
      return res.status(404).send("Faltan datos obligatorios por cargar");

      if(formData) console.log(formData);

    let suppDB = await Supplier.create({
      name,
      cuit,
      description,
      
    });
    let detailsSupDB = await Detail.create({
      location: location,
      adress: adress,
      phoneNumber: phoneNumber,
      eMail: eMail,
    });
    await suppDB.setDetail(detailsSupDB);
    res.status(200).send("Proveedor creado exitosamente");
  } catch (error) {
    res.status(500).send("Hubo un error en el servidor");
  }
});

module.exports = router;
