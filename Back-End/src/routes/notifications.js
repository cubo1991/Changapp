const { Router } = require('express')

const router = Router();

router.use(require('../middlewares/notifiactionMails.js'))

module.exports = router;