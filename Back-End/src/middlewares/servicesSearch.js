const {Service, Op} = require('../db.js');
const { Router } = require('express');
const {Supplier} = require('../db.js');
const router = Router();

module.exports = router.get('/', async (req, res, next) => {

  try{

    //http://localhost:3000/services?type=Limpieza   
    let {type} = req.query;

    if(type){

      const result = await Service.findAll({
        attributes: ['serviceType'],
        where: {
            serviceType : {
                [Op.iLike]: `%${type}%` //case insensitive, busca aunque no sea un matcheo exacto en cualquier lugar del texto.
            }                           //EJEM: si se busca "lim" trae todos los services que lleven lim (Limpieza de techos, Limpieza de cloacas, etc)
        },
        include: [
          {
          model: Supplier
        }],
        raw: true,
        nest: true
      })

      console.log(result)

      result.length > 0 ? res.status(200).json(result) : res.send("No se encontro ningún servicio con ese nombre");

    }else {   //http://localhost:3000/services
  
      const result = await Service.findAll({
        attributes: ['serviceType'],
        include: [
          {
            model: Supplier
          }
        ],
        raw: true,
        nest: true
      });
      
      res.status(200).json(result);
    }


  }catch(error){
    next(error)
  }

})