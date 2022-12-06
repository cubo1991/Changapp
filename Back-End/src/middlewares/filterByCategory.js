const { Service, Supplier, Category } = require('../db.js');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res, next) => {
    try{
        //http://localhost:3000/services?by=category&category=id
        const { by, category } = req.query;

            if (by === 'category' && category > 0){

                const result = await Service.findAll({
                    where: {
                        CategoryId: parseInt(category,10)
                    },
                    include: [{
                        model: Supplier,
                        attributes: ["name"]
                      },
                      {
                        model: Category,
                        attributes: ["name"]
                      }]
                });

                if(!result.length) return res.status(404).send('No se encontró la categoría');

                else return res.status(200).json(result);
                
            } else if(by === 'category' && category === 0) {
            
                const result = await Service.findAll({
                    include: [{
                        model: Supplier,
                        attributes: ['name']
                    },
                    {
                        model: category,
                        attributes: ['name']
                    }]
                });

                if(!result.length) return res.status(404).send("no se encontró la categoría");
                else return res.status(200).json(result)
            
            } else next();

    } catch(e) {
        next(e);
    }
});

module.exports = router;