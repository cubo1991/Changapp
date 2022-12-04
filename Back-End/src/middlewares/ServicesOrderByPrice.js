const { Service, Op } = require('../db.js');
const { Supplier } = require('../db.js');
const { conn } = require('../db.js')

const { Router } = require('express');
const router = Router();

module.exports = router.get('/', async (req, res, next) => {

  try{

    let { filter, order } = req.query;

    //filter => recibe un string con los services que se esten mostrando en caso de estar filtrados
    //order => "ASC" para ordenamiento ascendente y "DESC" para ordenamiento descendente

    // http://localhost:3000/services?filter=Limpieza%20de%20Hoteles,Limpieza%20de%20Hogares&order=ASC
    if(filter && filter !== "undefined"){

      filter = filter.split(",");
      
      const OrderBy = await Service.findAll({
        where: {
          serviceType: {
            [Op.any] : filter
          }
        },
        include: [
          {
            model: Supplier
          }
        ],
        order: [
          [conn.cast(conn.col('pricePerHour'), 'INTEGER'), order]
        ]
      });

      res.status(200).json(OrderBy);

    } else if(filter === "undefined") {   // http://localhost:3000/services?filter=undefined&order=ASC

      const OrderBy = await Service.findAll({

        include: [
          {
          model: Supplier
          }
      ],
        order: [
          [conn.cast(conn.col('pricePerHour'), 'INTEGER'), order]
        ]
      });

      res.status(200).json(OrderBy);
    
    }else next()

    
    

  }catch(error){
    next(error)
  }
});