const { Router } = require("express");
const router = Router();
const { Supplier, Detail, Service, Review, Op } = require("../db.js");

router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      //http://localhost:3001/suppliers?name=Techos
      const suppliersDB = await Supplier.findAll({
        where: {
          name: {
            [Op.substring]: name,
          },
        },
        include: [
          {
            model: Detail,
          },
          {
            model: Service,
          },
        ],
      });
      if (suppliersDB.length === 0) {
        res.status(404).send("No hubo resultados para la busqueda");
      } else {
        let result = [];
        for (let i = 0; i < suppliersDB.length; i++) {
          const reviews = await Review.findAll({
            include: {
              model: Service,
              where: {
                id: suppliersDB[i].dataValues.Services[0].dataValues.id,
              },
            },
          });
          //Rating promediado
          let revireProm = 0;
          reviews.map(({ rating }) => (revireProm += rating));
          revireProm = revireProm / reviews.length;

          let objSupp = {
            id: suppliersDB[i].dataValues.id,
            name: suppliersDB[i].dataValues.name,
            cuit: suppliersDB[i].dataValues.cuit,
            description: suppliersDB[i].dataValues.description,
            detail: suppliersDB[i].dataValues.Detail,
            Services: suppliersDB[i].dataValues.Services,
            Rating: revireProm,
          };
          result.push(objSupp);
        } 
        res.status(200).json(result);
      }
    } else {
      //http://localhost:3001/suppliers
      const suppliersDB = await Supplier.findAll({
        include: [
          {
            model: Detail,
          },
          {
            model: Service,
          },
        ],
      });
      //Traer reviews de cada servicio
      let result = [];
      for (let i = 0; i < suppliersDB.length; i++) {
        const reviews = await Review.findAll({
          include: {
            model: Service,
            where: {
              id: suppliersDB[i].dataValues.Services[0].dataValues.id,
            },
          },
        });
        //Rating promediado
        let revireProm = 0;
        reviews.map(({ rating }) => (revireProm += rating));
        revireProm = revireProm / reviews.length;

        let objSupp = {
          id: suppliersDB[i].dataValues.id,
          name: suppliersDB[i].dataValues.name,
          cuit: suppliersDB[i].dataValues.cuit,
          description: suppliersDB[i].dataValues.description,
          detail: suppliersDB[i].dataValues.Detail,
          Services: suppliersDB[i].dataValues.Services,
          Rating: revireProm,
        };
        result.push(objSupp);
      }
      res.status(200).json(result);
    }
  } catch (e) {
    return res.status(500).send("Hubo un error en el servidor");
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, cuit, description, location, adress, phoneNumber, eMail } =
      req.body;
    if ((!name, !cuit, !description, !location, !adress, !phoneNumber, !eMail))
      res.status(404).send("Faltan datos obligatorios por cargar");
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

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  //http://localhost:3001/suppliers/id
  try {
    let suppDB = await Supplier.findAll({
      where: {
        id: id,
      },
      include: {
        model: Detail,
        model: Service
      },
    });
    res.status(200).json(suppDB);
  } catch (error) {
    res.status(500).send("Hubo un error en el servidor");
  }
});


module.exports = router;
