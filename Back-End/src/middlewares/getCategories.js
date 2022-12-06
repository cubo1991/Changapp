const { Category } = require('../db.js');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const response = await Category.findAll()
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
module.exports = router;