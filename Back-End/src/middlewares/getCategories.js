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

        let result = response.filter(element => element.Services.length > 0)
    
        res
            .status(200)
            .send(result)
    } catch (e) {
        console.log(e.message || e)
        res
            .status(404)
            .json(e.message || e)
    }

});
module.exports = router;