import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MercadoPagoProduct from '../MercadoPagoProduct/MercadoPagoProduct';
import s from '../ShopForm.jsx/ShopForm.module.css'


export const ShopForm = () => {

    const inicialState = {
        name: '',
        lastname: '',
        phone: '',
        email: '',
        adress:'',
        location:'',
        CP: ''
    }

    
    const [input, setInput] = useState(inicialState);
    const [pagar, setPagar] = useState(false);

    let [error, setError] = useState({
        nameError: "",
        lastnameError: "",
        emailError: "",
        phoneError: "",
        locationError: "",
        addressError: ""
      });

      useEffect(() => {
        return () => {
            setPagar(false);
            setInput(inicialState);
        }
      },[])

    // Funciones Validadoras
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
              nameError: "El nombre no puede contener carácteres especiales"
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

      function lastnameValidator (lastname, set) {
        if(!/^\S/m.test(lastname)){
          set(prev => {     
            return {
              ...prev,
              lastnameError: "Este campo no puede empezar con un espacio vacío"
            }    
          });
        }
        else if(!/\S$/gm.test(lastname)){
          set(prev => {     
            return {
              ...prev,
              lastnameError: "Este campo no puede terminar con un espacio en vacío"
            }    
          });
        }
        else if( /[^A-Za-zÑ-ñ- ]/.test(lastname) /* ||  */){
          set(prev => {     
            return {
              ...prev,
              lastnameError: "El nombre no puede contener carácteres especiales"
            }    
          });
        } 
        else set( prev => {
          return {
            ...prev,
            lastnameError: ""
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
//
    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

//
    const handlerSubmit = (e) => {
        e.preventDefault();
        setPagar(true);

    }

    console.log("Rendering ShopForm");

    return (

        <div className={s.container}>
            <h2 className="h2">Datos del comprador</h2>

            <div className='card' style={{ width: "40rem", left: "22rem", top: "2rem" }}>
            
            <form className="row g-3" onSubmit={(e)=>handlerSubmit(e)}>

                <div class="form-group">

                    <div div className="col-12">
                    <label>Nombres: </label>
                    <input
                        type='text'
                        name='name'
                        class="form-control"
                        placeholder='*Required data'
                        value={input.name}
                        onChange={(e) => {
                            onChange(e);
                            nameValidator(e.target.value, setError)}} />
                     <br></br>
                     {error.nameError && <span className={s.error}>{error.nameError}</span>}
                     </div>
                        
                    <div div className="col-12">
                    <label>Apellidos: </label>
                    <input
                        type='text'
                        name='lastname'
                        class="form-control"
                        placeholder='*Required data'
                        value={input.lastname}
                        onChange={(e) => {
                            onChange(e);
                            lastnameValidator(e.target.value, setError)}} />
                     {error.lastnameError && <span className={s.error}>{error.lastnameError}</span>}
                    </div>
                    
                    <div className="col-md-6">
                    <label>E-mail: </label>
                    <input
                        type="email"
                        class="form-control"
                        name='email'
                        placeholder='*Required data'
                        value={input.email}
                        onChange={(e) => {
                            onChange(e)
                            emailValidator(e.target.value, setError)
                            }}
                     />
                      {error.emailError && <span className={s.error}>{error.emailError}</span>}
                    </div>

                    <div className="col-md-6">
                    <label>Número de Teléfono: </label>
                    <input
                        type='number'
                        name='phone'
                        class="form-control"
                        placeholder='*Required data'
                        value={input.phone}
                        onChange={(e) => onChange(e)} />
                    
                    </div>
                    
                    <div className="col-12">
                    <label>Dirección</label>
                    <input
                        type='text'
                        name='adress'
                        class="form-control"
                        placeholder='*Required data'
                        value={input.street}
                        onChange={(e) => {
                            onChange(e);
                            emptyValidator(e.target.value, setError, "addressError")
                        }} />
                        {error.addressError && <span className={s.error}>{error.addressError}</span>}
                    </div>

                    <div className="col-9">
                    <label>Ciudad: </label>
                    <input
                        type='text'
                        name='location'
                        class="form-control"
                        placeholder='*Required data'
                        value={input.ciudad}
                        onChange={(e) => {
                            onChange(e);
                            emptyValidator(e.target.value, setError, "locationError")
                            }} />
                        {error.locationError && <span className={s.error}>{error.locationError}</span>}
                    </div>
                    
                    <div class="col-md-3">
                    <label>Código Postal: </label>
                    <input
                        type='number'
                        name='CP'
                        class="form-control"
                        placeholder='*Required data'
                        value={input.CP}
                        onChange={(e) => onChange(e)} />
                    </div>

                    <div className="col-md-12">
                    <input
                        class="btn btn-primary"
                        value='Solicitar Pago'
                        type='submit'
                        disabled= {
                            error.nameError || input.name === "" || error.lastnameError || input.lastname === "" || error.emailError || error.locationError ||
                            error.addressError || error.locationError ? true : false
                          }
                    />

                    <div>
                    {pagar? <MercadoPagoProduct/> : null}
                    </div>
                    
                    </div>

                </div>
                </form>

            </div>
        </div>
    )
}