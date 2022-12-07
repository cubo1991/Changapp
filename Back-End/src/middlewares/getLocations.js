const { Detail, User } = require('../db.js');
const { Router } = require('express');
const router = Router();


module.exports = router.get('/', async (req, res) => {
  try {
      const response = await Detail.findAll({
        //attributes: ['location','adress']
        include: {
          model: User
        }
      })
      res
          .status(200)
          .send(response)
  } catch (e) {
      console.log(e.message || e)
      res
          .status(404)
          .json(e.message || e)
  }

});