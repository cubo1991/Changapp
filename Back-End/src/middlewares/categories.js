const { Category, Service } = require('../db.js');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const response = await Category.findAll({
            include: {
                model: Service
            }
        })

        /* let result = response.filter(element => element.Services.length > 0) */
    
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

router.post('/', async (req, res, next) => {
    try{
        const { newCategory } = req.body;

        console.log(req.body)

        if(newCategory){
          
          const search = await Category.findAll({
              where: {
                  name: newCategory
              }
          })

          console.log(search)
  
          if(search.length > 0) return res.status(200).json("Ya existe esa categoría");
  
          const result = await Category.create({
            name: newCategory
          })

          console.log(result)

          return res.status(200).json("Se ha creado la categoría exitosamente!");

        }

        return res.status(404).json("No ha ingresado una nueva categoría")

    }catch(error){
        next(error)
    }
})

module.exports = router;