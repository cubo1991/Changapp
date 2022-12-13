import React from 'react';
import { useEffect } from 'react';
import {useState} from 'react';
import MercadoPago from '../MercadoPago/MercadoPago';


export const ShopForm = () => {
 
    const inicialState = {
        name:'',
        lastname:'',
        phone:'',
        email:'',
        street:'',
        number:'',
        ciudad:'',
        provincia:'',
        CP:''
    }

    const [input, setInput] = useState(inicialState);
    const [pagar, setPagar] = useState(true);

   
    const onChange = (e) => {
            setInput({
                ...input,
                [e.target.name]:e.target.value
            });
        }

    const handlerSubmit = (e) => {
        e.preventDefault();
        setPagar(false)

    }

    return (
     
        <div>
            <form onSubmit={handlerSubmit}>
            
                <label>Nombres: </label>
                <input 
                type='text'
                name='name'
                placeholder='*Required data'
                value={input.name}
                onChange={(e) => onChange(e)}/>
                <br/>

                 <label>Apellidos: </label>
                <input 
                type='text'
                name='lastname'
                placeholder='*Required data'
                value={input.lastname}
                onChange={(e) => onChange(e)}/>
                <br/>  

                <label>Número de Teléfono: </label>
                <input 
                type='text'
                name='phone'
                placeholder='*Required data'
                value={input.phone}
                onChange={(e) => onChange(e)}/>
                <br/> 

                <label>E-mail: </label>
                <input 
                type='text'
                name='email'
                placeholder='*Required data'
                value={input.email}
                onChange={(e) => onChange(e)}/>
                <br/>

                <label>Calle: </label>
                <input 
                type='text'
                name='street'
                placeholder='*Required data'
                value={input.street}
                onChange={(e) => onChange(e)}/>
                <br/>

                <label>Nº de casa: </label>
                <input 
                type='text'
                name='number'
                placeholder='*Required data'
                value={input.number}
                onChange={(e) => onChange(e)}/>
                <br/>

                <label>Provincia: </label>
                <input 
                type='text'
                name='provincia'
                placeholder='*Required data'
                value={input.provincia}
                onChange={(e) => onChange(e)}/>
                <br/>

                <label>Ciudad: </label>
                <input 
                type='text'
                name='ciudad'
                placeholder='*Required data'
                value={input.ciudad}
                onChange={(e) => onChange(e)}/>
                <br/>

                <label>Código Postal: </label>
                <input 
                type='text'
                name='CP'
                placeholder='*Required data'
                value={input.CP}
                onChange={(e) => onChange(e)}/>
                <br/>

                <input 
                type='submit'
                value='Solicitar Pago'
                />
            </form>

            {(pagar)?null: <MercadoPago items= {input}/>}
        </div>
    )
}
