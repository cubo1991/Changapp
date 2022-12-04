const { Router } = require('express');


const router = Router();


router.use(require('../middlewares/servicesDetail.js'));


module.exports = router;