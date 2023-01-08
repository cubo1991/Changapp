const { Router } = require('express');
const { User, UserRol } = require('../db.js');

const router = Router();

router.put("/", async (req, res, next) => {
  try{

    const { id, newRole } = req.body;   //id = id del user  //newRole = nuevo rol a asignar
    
    const result = await User.update({
      UserRolName: newRole
    }, {
      where: {
        id
      }
    })
    
    //Comprobación de que se cambia el UserRolName y el UserRol exitosamente
    /* const search = await User.findByPk(id,{
      include: {
        model: UserRol
      }
      return res.json(search);
    }) */

    if(result) return res.json("La actualización de rol ha sido exitosa!");

  }catch(error){
    next(error);
  }
})

module.exports = router;