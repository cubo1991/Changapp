const { Category } = require('../db.js');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const response = await Category.findAll()
        return response
    } catch (e) {
        console.log(e.message || e)
        return e.message || e
    }

});
module.exports = router;