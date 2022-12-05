const { Review, Service, conn } = require('../db.js');
const { Router } = require('express');

const router = Router();

module.exports = router.get('/orderService', async (req, res, next) => {

  try{

    let {dir, filter} = req.query;

  /* http://localhost:3000/review/orderService?dir=ASC (ASC para orden ascendente, DESC para descendente) =>
     Devuelvfe todos los servicios en la base de datos ordenados por su rating, dependiendo del dir valor que recibe por dir*/
    if(dir && !filter && (dir === "ASC" || dir === "DESC")){

      const result = await Review.findAll({
        order:[
          [conn.cast(conn.col('rating'), 'INTEGER'), dir]
        ],
        include: { model: Service}
      })
      return res.status(200).json(result)

    }else if (filter && (dir === "ASC" || dir === "DESC")){   // http://localhost:3000/review/orderService?filter=Limpieza de Hospitales&dir=ASC
                                                              // Devulve solo los servicios donde el serviceType se pasa por filter (en caso de que esten filtrados) y los ordena dependiendo del valor de dir
      const result = await Review.findAll({
        order:[
          [conn.cast(conn.col('rating'), 'INTEGER'), dir]
        ],
        include: {
          model: Service,
          where: {
            serviceType: filter
          }
        }
      })

      return res.status(200).json(result);

    }

    next();

  }catch(error){
    next(error)
  }

})