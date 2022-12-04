const {Service, Category} = require('../db.js');
const { Router } = require('express');
const router = Router();

router.get('/:id', async (req, res) => {
    
    const { id } = req.params;
    let detail = {};

    try{

        detail = await Service.findByPk(id, {
            include: [Category]
        }); 

            if(detail === null) return res.status(404).send('El servicio no se encontró');
        
        else return res.status(200).send(detail);   

    } catch(e){
   
        return res.status(500).send('Algo salió mal');
    }
    
});

module.exports = router;