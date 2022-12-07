import React from 'react'

export const Contact = () => {
  return (
    <div>
      <h2 className="h2">Contactenos</h2>   
    
    <div className='card' style={{width:"40rem", left:"22rem", top:"2rem"}}>
     
     <form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"></input>
  </div>
  <div className="col-md-6">
    <label for="inputName" className="form-label">Nombre y apellido</label>
    <input type="text" className="form-control" id="inputName"></input>
  </div>
  <div className="col-12">
    <label for="inputPhone" className="form-label">Teléfono</label>
    <input type="tel" className="form-control" id="inputPhone" placeholder=""></input>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Dirección</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder=""></input>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">Ciudad</label>
    <input type="text" className="form-control" id="inputCity"></input>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">Provincia</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Cod. Postal</label>
    <input type="text" className="form-control" id="inputZip"></input>
  </div>    
   <div className="col-12">
    <button type="submit" className="btn btn-primary">Enviar</button>
  </div>
</form>


    </div>
    </div>
  )
}
