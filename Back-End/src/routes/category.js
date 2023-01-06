const { Router } = require('express');


const router = Router();


router.use(require('../middlewares/categories'));


module.exports = router;
