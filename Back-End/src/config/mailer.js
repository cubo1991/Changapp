const nodemailer = require('nodemailer');
const  {SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

let transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true, // true for 465, false for other ports
  auth: {
    user: SMTP_USER, // generated ethereal user
    pass: SMTP_PASS, // generated ethereal password
  },
  tls : { rejectUnauthorized: false }
});

transporter.verify().then( () => {              //Solo se esta utilizando el método verify para notificar que todo esta funcionando correctamente
  console.log('Service ready for send emails.')
})

module.exports = transporter;