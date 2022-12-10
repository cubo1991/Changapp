const { Router } = require('express');


const router = Router();

router.use(require("../middlewares/userHandler"))




module.exports = router;
