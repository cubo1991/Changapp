const { Detail, User, UserRol, Op } = require('../db.js');
const { Router } = require('express');
const router = Router();


module.exports = router.get('/', async (req, res) => {
  try {

      const search = await Detail.findAll({
        attributes: ['location'],
        include: {
          model: User,
          include: {
            model: UserRol
            ,
            where: {
              name: "Supplier"
            }
          },
        }
      })

      //Quitar duplicados
      let result = search.map( element => {
        return [element.location, element]  //Se retorna un array ["location", {location obj}]
      });

      result = new Map(result)    //Se hace un par key: value de los arrays resultantes

      result = [...result.values()]

      let response = result.filter( element => element.User !== null)

      res
          .status(200)
          .send(response)

  } catch (e) {
      console.log(e.message || e)
      res
          .status(404)
          .json(e.message || e)
  }

});