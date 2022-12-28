const { Router } = require('express');


const router = Router();
// router.use(require("../middlewares/updateImageProfile"))
router.use(require("../middlewares/userHandler"))




module.exports = router;
