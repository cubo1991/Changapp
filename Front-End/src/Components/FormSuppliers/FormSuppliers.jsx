import React from 'react'
import { useForm } from 'react-hook-form'
import s from './FormSuppliers.module.css'
import { useDispatch } from 'react-redux'
import { postSupplier } from '../../actions'
import { useState } from 'react';

export const FormSuppliers = () => {
let dispatch = useDispatch()
    
    //const {register, handleSubmit, formState: {errors}} = useForm()

    const  onSubmit = (data) => {
      console.log(data)
       dispatch(postSupplier(data)) 
    }

    function nameValidator (name, set) {
      if(!/^\S/m.test(name)){
        set(prev => {     
          return {
            ...prev,
            nameError: "Este campo no puede empezar con un espacio vacío"
          }    
        });
      }
      else if(!/\S$/gm.test(name)){
        set(prev => {     
          return {
            ...prev,
            nameError: "Este campo no puede terminar con un espacio en vacío"
          }    
        });
      }
      else if( /[^A-Za-zÑ-ñ- ]/.test(name) /* ||  */){
        set(prev => {     
          return {
            ...prev,
            nameError: "El nombre de la empresa no puede contener carácteres especiales"
          }    
        });
      } 
      else set( prev => {
        return {
          ...prev,
          nameError: ""
        }
      });
    }

    function emptyValidator (name, set, event){

      if(!/^\S/m.test(name)){
        set(prev => {     
          return {
            ...prev,
            [event]: "Este campo no puede empezar con un espacio vacío"
          }    
        });
      }else if(event !== "addressError" && /[^A-Za-zÑ-ñ- ]/.test(name) /* ||  */){
        set(prev => {     
          return {
            ...prev,
            [event]: "Este campo no puede contener carácteres especiales"
          }    
        });
      } else set( prev => {
        return {
          ...prev,
          [event]: ""
        }
      });

    }

    function cuitValidator (cuit, set){
      if(cuit.lenght > 12 || cuit.lenght < 1){
        set(prev => {
          return {
            ...prev,
            cuitError: "Numero de caracteres invalido"
          }
        })
      } else set( prev => {
        return {
          ...prev,
          cuitError: ""
        }
      });
    }

    function emailValidator(email, set){
      if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        set(prev => {
          return {
            ...prev,
            emailError: "El email es invalido"
          }
        })
      } else set( prev => {
        return {
          ...prev,
          emailError: ""
        }
      });
    }
    
    let [inputValues, setInputValues] = useState({
      name: "",
      cuit: "",
      email: "",
      phone: "",
      location: "",
      address: "",
      description: ""
    })

    const changeHandler = (e) => {
      setInputValues( prev => {
        return {
          ...prev,
          [e.target.name] : e.target.value
        }
      })
     // console.log(inputValues)
    }

    let [error, setError] = useState({
      nameError: "",
      cuitError: "",
      emailError: "",
      phoneError: "",
      locationError: "",
      addressError: "",
      descriptionError: ""
    })
    
    console.log(error)

    return (
      <div className={s.container}><h1>Inscribí a tu empresa</h1>
    
      <div className='card' style={{width:"40rem", left:"22rem", top:"2rem"}}>
     
     <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(inputValues)
     }} className="row g-3">

      <div className="col-md-6">
        <label for="inputName" className="form-label">Nombre de la empresa</label>
        <input name='name' value={inputValues.name} onChange={(e) => {
          changeHandler(e);
          nameValidator(e.target.value, setError)
          }} type="text"></input>
          <br></br>
        {error.nameError && <span className={s.error}>{error.nameError}</span>}
      </div>
      
      <div className="col-md-6">
        <label for="inputCuit" className="form-label">CUIT</label>
        <input name="cuit" onChange={(e) => {
          changeHandler(e);
          cuitValidator(e.target.value, setError);
          }} type="text" className="form-control" id="inputCuit" placeholder="xx-xxxxxxxx-x" /* {...register("cuit", {required:true, minLength: 12, maxLength: 13, pattern: /([0-9]+(-[0-9]+)+)/i})} */></input>
        
      </div>

  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input name='email' onChange={(e) => {
      changeHandler(e)
      emailValidator(e.target.value, setError)
      }} type="email" className="form-control" id="inputEmail4" /* {...register("eMail",  { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ },)} *//>
    {error.emailError && <span className={s.error}>{error.emailError}</span>}
  </div>

  <div className="col-md-6">
    <label for="inputPhone" className="form-label">Teléfono</label>
    <input name='phone' onChange={
      (e) => {
        changeHandler(e)
      
      }} type="number" className="form-control" id="inputPhone" placeholder="" /* {...register("phoneNumber", {required:true, pattern: /^[0-9]\d*(\.\d+)?$/})} */></input>
    
  </div>

  <div className="col-12">
    <label for="inputAddress2" className="form-label">Dirección</label>
    <input name='address' onChange={(e) => {
      changeHandler(e)
      emptyValidator(e.target.value, setError, "addressError")
      }} type="text" className="form-control" id="inputAddress2" placeholder="" /* {...register("adress", {required:true})} */></input>
      {error.addressError && <span className={s.error}>{error.addressError}</span>}
  </div>

  <div className="col-12">
    <label for="inputCity" className="form-label">Ciudad</label>
    <input name='location' onChange={(e) =>{      
      changeHandler(e)
      emptyValidator(e.target.value, setError, "locationError")
      }} type="text" className="form-control" id="inputCity" /* {...register("location", {required:true})} */></input>
    {error.locationError && <span className={s.error}>{error.locationError}</span>}

  </div>

  <div className="col-12">
    <label for="inputDescription" className="form-label">Descripción del servicio</label>
    <input name='description' onChange={(e) => changeHandler(e)} type="text" className="form-control" id="inputDescription" placeholder="" /* {...register("description", {required:true})} */></input>
    
   
  </div>
  
   <div className="col-md-12">
    <button type="submit" className="btn btn-primary" disabled= {
      error.name || inputValues.name === "" || error.cuitError || error.emailError || error.locationError ||
      error.addressError || error.locationError ? true : false
    }>Enviar</button>
  </div>


</form>


    </div>
    
    
    </div>
    )

  /* return (
    <div className={s.container}><h1>Inscribí a tu empresa</h1>
    
      <div className='card' style={{width:"40rem", left:"22rem", top:"2rem"}}>
     
     <form onSubmit={handleSubmit(onSubmit)} className="row g-3">

      <div className="col-md-6">
        <label for="inputName" className="form-label">Nombre de la empresa</label>
        <input name='name' value={inputValues.name} onChange={(e) => changeHandler(e)} type="text" className="form-control" id="inputName" {...register("name",  { required: true })}></input>
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
  ) */
}
