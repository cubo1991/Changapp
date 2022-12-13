import React from 'react'
import { useForm } from 'react-hook-form'
import s from './FormSuppliers.module.css'
import { useDispatch } from 'react-redux'
import { postSupplier } from '../../actions'

export const FormSuppliers = () => {
let dispatch = useDispatch()
    
    const {register, handleSubmit, formState: {errors}} = useForm()

    const  onSubmit = (data) => {
      console.log(data)
      dispatch(postSupplier(data))
    }
  
  return (
    <div className={s.container}><h1>Inscribí a tu empresa</h1>
    
      <div className='card' style={{width:"40rem", left:"22rem", top:"2rem"}}>
     
     <form onSubmit={handleSubmit(onSubmit)} className="row g-3">

  <div className="col-md-6">
    <label for="inputName" className="form-label">Nombre de la empresa</label>
    <input type="text" className="form-control" id="inputName" {...register("name",  { required: true })}></input>
    {errors.name && <span className={s.error}>Este campo es obligatorio</span>}
  </div>
  <div className="col-md-6">
    <label for="inputCuit" className="form-label">CUIT</label>
    <input type="text" className="form-control" id="inputCuit" placeholder="xx-xxxxxxxx-x" {...register("cuit", {required:true, minLength: 12, maxLength: 13, pattern: /([0-9]+(-[0-9]+)+)/i})}></input>
    {errors.cuit?.type === 'required' && <span className={s.error}>Este campo es obligatorio</span>}
    {errors.cuit?.type === 'pattern' && <span className={s.error}>Solo se permiten números</span>}
    {errors.cuit?.type === 'minLength' && <span className={s.error}>El mínimo es de 10 caracteres</span>}
    {errors.cuit?.type === 'maxLength' && <span className={s.error}>El máximo es de 11 caracteres</span>}
  </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4" {...register("eMail",  { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },)}/>
    {errors.eMail && <span className={s.error}>Este campo es obligatorio</span>}
  </div>
  <div className="col-md-6">
    <label for="inputPhone" className="form-label">Teléfono</label>
    <input type="number" className="form-control" id="inputPhone" placeholder="" {...register("phoneNumber", {required:true, pattern: /^[0-9]\d*(\.\d+)?$/})}></input>
    {errors.phoneNumber?.type === 'required' && <span className={s.error}>Este campo es obligatorio</span>}
    {errors.phoneNumber?.type === 'pattern' && <span className={s.error}>Solo se permiten números</span>}
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Dirección</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="" {...register("adress", {required:true})}></input>
    {errors.adress && <span className={s.error}>Este campo es obligatorio</span>}
  </div>
  <div className="col-12">
    <label for="inputCity" className="form-label">Ciudad</label>
    <input type="text" className="form-control" id="inputCity" {...register("location", {required:true})}></input>
    {errors.location && <span className={s.error}>Este campo es obligatorio</span>}
  </div>

  <div className="col-12">
    <label for="inputDescription" className="form-label">Descripción del servicio</label>
    <input type="text" className="form-control" id="inputDescription" placeholder="" {...register("description", {required:true})}></input>
    {errors.description && <span className={s.error}>Este campo es obligatorio</span>}
  </div>
   <div className="col-md-12">
    <button type="submit" className="btn btn-primary">Enviar</button>
  </div>


</form>


    </div>
    
    
    </div>
  )
}
