const { Router } = require('express');
const  transporter  = require('../config/mailer.js');
const message = require('../config/messanges.js');

const router = Router();

router.get('/', async (req, res, next) => {

  const { success, email } = req.query

  if(success){
  try{
    if(success === "true"){
      await transporter.sendMail(message.successMessage(email));
    }else if(success === "false"){
      await transporter.sendMail(message.failureMessage(email))
    }
      return res.json("Envio de correo exitoso")

    }catch(err){
      console.log(err)
      next(err)
    }
  }

  next();

})

module.exports = router;

