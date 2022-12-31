const { Router } = require('express');
const  transporter  = require('../config/mailer.js');

const router = Router();

router.get('/', async (req, res, next) => {

  const { success, email } = req.query

  if(success){
  try{
  
      let mailInfo = await transporter.sendMail({
        from: '"ChangApp" <lmarcanox00x@gmail.com>', // sender address
        to: "lmarcano203@gmail.com", // list of receivers
        subject: "Se ha realizado su contratación!", // Subject line
        //text: "Hello world?", // plain text body
        html: `<b>Estimado usuario</b>
              <p>El pedido de la contratación del servicio "x" con la identificación "y" se ha realizado
              exitosamente! Recuerde puntuar su servicio una vez finalizado.</p>`, // html body
      });

      return res.json("Envio de correo exitoso")

    }catch(err){
      console.log(err)
      next(err)
    }
  }

  next();

})

module.exports = router;

