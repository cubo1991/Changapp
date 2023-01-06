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

// /:supplierId?turno=asignado o ?turno=liberado &cantidad=
router.post('/:supplierId', async (req,res, next) => {
  const {supplierId} = req.params;
  const {turno, cantidad} = req.query;
  
  let cantd;
  if (!cantidad) cantd=1;
  else cantd=cantidad
  
  try{
  
    var modelo = await Supplier.findByPk(supplierId,{
      include: [{
        model: Service
      }]
    });
  
    let servicesId = modelo.Services.map(s => {
      return s.id
    });
  
  if(turno === 'asignado'){
    if(modelo.stock-cantd < 0) return res.status(400).send('No hay más turnos disponibles');
  
    await Supplier.update({
      stock: modelo.stock - cantd
    },{
      where:{
        id: supplierId 
      }
    });
  }
  
  if(turno === 'liberado'){
    if(modelo.stock >= 8) return res.status(400).send('No se permite agregar más turnos');
  
    await Supplier.update({
      stock: modelo.stock + cantd
    },{
      where:{
        id: supplierId 
      }
    });
  }
  for(let i=0; i<servicesId.length;i++){
    let acum=0;
    const service = await Service.findByPk(servicesId[i],{
      include: [{
        model: Supplier
      }]
    });
  
  service.Suppliers?.map(s => {
    acum=acum+s.stock
  });
  
  if(acum === 0) {
    await Service.update({
      disponible: false
    }, {
      where:{
        id: servicesId[i]
      }
    });
  } else {
    await Service.update({
      disponible: true
    }, {
      where:{
        id: servicesId[i]
      }
    });
  }
  }
    return res.status(201).send(`Turno ${turno}`)
  }
  catch(e){
    console.log(e);
    return res.status(500).send(e)
  }
  
  });
  
module.exports = router;