const { Router } = require('express');

const router = Router();

module.exports = router.use(require('../middlewares/getUsers.js'));