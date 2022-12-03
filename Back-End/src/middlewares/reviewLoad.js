const { Router } = require("express");
const router = Router();
const { Review,Service, User, Op } = require("../db.js");


router.get("/:id", async (req, res) => {
    const { id } =  req.params
    try {
      let resultReview = await Review.findAll({
        include: {
          model: Service,
          where: {
            id: id
          }
        }
      });
      if(resultReview.length === 0 ) return res.status(200).json("No hay ninguna review cargada")
      res.status(200).json(resultReview)
    } catch (error) {
      res.status(500).send("Hubo un error en el servidor")
    }
})

router.post("/", async (req, res) => {
    const {comment, rating, serviceId, userId} = req.body
    //http://localhost:3001/review
  try {
    if(!comment || !rating) res.send("Faltan datos obligatorios por cargar")
    //create
    let reviewDB = await Review.create({
        comment: comment,
        rating: rating
    })
    //Search user and service
     let userDB = await User.findByPk(userId) 
    let servideDB = await Service.findByPk(serviceId) 

     await reviewDB.setUser(userDB.dataValues.id)
     await reviewDB.setService(servideDB.dataValues.id) 
    res.status(200).send("Review Cargada Exitosamente ")
  } catch (error) {
    res.status(500).send("Hubo un error en el servidor")
  }
});

module.exports = router;
