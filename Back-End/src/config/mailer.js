const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "lmarcanox00x@gmail.com", // generated ethereal user
    pass: "ztzwzijjhaptorrm", // generated ethereal password
  },
});

transporter.verify().then( () => {              //Solo se esta utilizando el método verify para notificar que todo esta funcionando correctamente
  console.log('Service ready for send emails.')
})

module.exports = transporter;