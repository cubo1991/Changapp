const { Router } = require('express');


const router = Router();

router.use(require('../middlewares/ServicesReviewOrderByRating.js'));

router.use(require('../middlewares/reviewLoad'));


module.exports = router;
