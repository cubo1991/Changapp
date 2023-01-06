// const { Detail, User } = require('../db.js');
// const { Router } = require('express');
// const router = Router();


// module.exports = router.get('/:id', async (req, res) => {
//   const { id } = req.params
//   try {
//     let userDB = await User.findAll({
//       where: {
//         id: id
//       }
//     })
//     res.status(200).json(userDB)
//   } catch (e) {
//     console.log(e.message || e)
//     res
//         .status(404)
//         .json(e.message || e)
//   }
//   res.send("hola")

// });