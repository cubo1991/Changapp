const { Router } = require('express');


const router = Router();


router.use(require('../middlewares/getCategories'));


module.exports = router;
