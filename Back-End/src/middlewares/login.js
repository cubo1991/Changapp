const { Detail, User } = require('../db.js');
const { Router } = require('express');
const router = Router();


module.exports = router.get('/', async (req, res) => {
  res.send("hola")

});