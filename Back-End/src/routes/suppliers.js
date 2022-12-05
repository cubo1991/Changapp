const { Router } = require('express');


const router = Router();

router.use(require("../middlewares/SupplierReviewOrderByRating"))
router.use(require("../middlewares/suppliersSearcher"))



module.exports = router;
