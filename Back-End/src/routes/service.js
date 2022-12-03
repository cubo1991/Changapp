const { Router } = require('express');
const { Service, Category } = require ('../db');



const router = Router();

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    let detail = {};

    try{
        detail = await Service.findByPk(id, {
            include: [Category]
        });

        if(detail === null) return res.status(404).send('Service not Found');

        else  return res.status(200).send(detail);

    } catch(e){
        console.log(e)
        return res.status(500).send('Something went wrong');
    }
});




module.exports = router;