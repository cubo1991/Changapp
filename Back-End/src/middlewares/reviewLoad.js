const { Router } = require("express");
const router = Router();
const { Review,Service, User, Op } = require("../db.js");

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
    res.send("Review Cargada Exitosamente ")
  } catch (error) {
    res.status(500).send("Hubo un error en el servidor")
  }
});

module.exports = router;
