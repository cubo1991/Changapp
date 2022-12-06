const { Router } = require('express');

const router = Router();

router.use(require('../middlewares/getLocations.js'));

module.exports = router;