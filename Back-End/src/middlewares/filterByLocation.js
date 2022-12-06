const { Service, Supplier, Detail, Category } = require('../db.js');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res, next) => {
//http://localhost:3000/services?by=location&location=location
try{
    const { by, location, ordered, order } = req.query;
    
    if(by === 'location'){
        if(location) {
            const supplier = await Supplier.findAll({
                include: {
                    model: Detail,
                    where: {
                        location: location
                    }
                }
            });

            if(!supplier.length) return res.status(404).send('No se encontaron resultados');

            else {

                let ids = supplier.map(e => e.id)
                console.log(ids)

                var result=[];

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
              
            }
       return res.status(200).json(result);

        } next()
    } next()
    
}catch(e) {
    next(e)
}

});


module.exports = router;