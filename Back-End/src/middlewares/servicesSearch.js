const {Service, Supplier, Category, Op, conn} = require('../db.js');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res, next) => {
  try{
    //http://localhost:3000/services?type=Limpieza   
    const {type} = req.query;

    if(type){

      const result = await Service.findAll({
        where: { 
        //ESTA ES LA SOLUCION DEL BUG DE LOS ACENTOS EN LA SEARCHBAR, PERO FALTA INSTALAR LA EXTENSION DE POSTGRES
            /* 
          [Op.or] : [
            {
              where: conn.where(
                conn.fn('unaccent', conn.col('serviceType')),{
                [Op.iLike]: `%${type}%`
                })
            },
            {
              serviceType : {
                [Op.iLike]: `%${type}%` 
                //case insensitive, busca aunque no sea un matcheo exacto en cualquier lugar del texto.
                 //EJEM: si se busca "lim" trae todos los services que lleven lim (Limpieza de techos, Limpieza de cloacas, etc)
              }
            }
          ]} */
        
            serviceType : {
                [Op.iLike]: `%${type}%` 
                //case insensitive, busca aunque no sea un matcheo exacto en cualquier lugar del texto.
                 //EJEM: si se busca "lim" trae todos los services que lleven lim (Limpieza de techos, Limpieza de cloacas, etc)
              } }
        ,
        include: [{
          model: Supplier,
          attributes: ["name"]
        },
        {
          model: Category,
          attributes: ["name"]
        }],
        raw: true,
        nest: true
      })

      console.log(result.length)

      result.length > 0 ? res.status(200).json(result) : res.send("No se encontro ningún servicio con ese nombre");

    }else {   //http://localhost:3000/services
  
      const result = await Service.findAll({

        include: [{
          model: Supplier,
          attributes: ["name"]
        },
        {
          model: Category,
          attributes: ["name"]
        }],
        raw: true,
        nest: true
      });
      
      res.status(200).json(result);
    }


  }catch(error){
    next(error)
  }

})



router.get('/:id', async (req, res) => {
  const { id } = req.params;
  let detail = {};
  //http://localhost:3001/services/id
  try{
      detail = await Service.findAll({
        where: {
          id: id
        },
          include: [{
            model: Supplier,
            attributes: ["name"]
          },
          {
            model: Category,
            attributes: ["name"]
          },
        ]
      });

      if(detail === null) return res.status(404).send('Servicio no encontrado');

      else return res.status(200).send(detail);

  } catch(e){
      return res.status(500).send('Hubo un error en el servidor');
  }
});




module.exports = router;
