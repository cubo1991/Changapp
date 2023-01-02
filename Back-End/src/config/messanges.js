
function successMessage(email){
  return {
    from: '"ChangApp" <lmarcanox00x@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Se ha realizado su contratación!", // Subject line
        //text: "Hello world?", // plain text body
        html: `<b>Estimado usuario</b>
        <p>El pedido de la contratación del servicio "x" con la identificación "y" se ha realizado
        exitosamente! Recuerde puntuar su servicio una vez finalizado.</p>`
  }
}

function failureMessage(email){
  return {
    from: '"ChangApp" <lmarcanox00x@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "No se ha podido realizar la contratación", // Subject line
        //text: "Hello world?", // plain text body
        html: `<b>Estimado usuario</b>
        <p>El pedido de la contratación del servicio "x" con la identificación "y" no ha podido
        ser realizado. Por favor, intente nuevamente realizar su pedido. Disculpe las molestias.</p>`
  }
}

module.exports = {
  successMessage,
  failureMessage
}