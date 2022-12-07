const { Service, Supplier, Detail, Category, Op, conn } = require('../db.js');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res, next) => {

//http://localhost:3000/services?by=location&location=location
try{
    const { by, location, ordered, order } = req.query;
   
    console.log(location)
    console.log(by)

    if(by === 'location' && location !== "undefined"){
        if(location) {
            const search = await Service.findAll({
                include: {
                    model: Supplier,
                    include: {
                        model: Detail,
                        where: {
                            location: location
                        }
                    }
                }
            });

            let services = [];

                search.forEach( element => {
                if(element['Suppliers'].length > 0) services.push(element.id)})

            if(!services.length) return res.status(404).send('No se encontaron resultados');

            let result = []

            for(let i = 0; i < services.length; i++){
                const iter = await Service.findByPk(services[i],{
                     include: {
                        model: Supplier,
                        include: {
                            model: Detail
                                }
                            }
                });
                result.push(iter);
            }
            
             //   const iter = await Service.findByPk(services[0]);

            
            //TODO MIA
            /* const result = await Service.findAll({
                where: {
                    id: {
                   //     [conn.cast(conn.col('pricePerHour'), 'INTEGER'), order]
                        [Op.any] : [conn.cast(services, 'UUID')]
                    }
                },
                include: {
                    model: Supplier
                }
            }) */

           // console.log(search[0].Suppliers)

            /*     let ids = search.map(e => e.id)
            //    console.log(ids)

                let result=[];

                for(let i=0; i<ids.length; i++){
                    var filtered = await Service.findAll({
                        include: [{
                            model: Supplier,
                            where: {
                               id: ids[i]
                            },
                            attributes: ["name"]
                        },
                        {
                            model: Category,
                            attributes: ["name"]
                          }]
                    });
                    
                    result = [...result, ...filtered];
              
                }
               */

            return res.status(200).json(result);
            
        
        }

        } else if( by === 'location' && location === "undefined"){

            const supplier = await Service.findAll({
                include: {
                    model: Supplier,
                    include: {
                        model: Detail
                    }
                }
            })

            return res.status(200).json(supplier);
        }
        
        next()
    
}catch(e) {
    next(e)
}

});


module.exports = router;