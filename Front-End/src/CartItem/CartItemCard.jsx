import React from 'react'
import { Footer } from '../Components/Footer/Footer'
import s from './CartItemCard.module.css'

export const CartItem = ({name, price, description, removeItem, id }) => {
   
    return (
        <div >
            
            <div className="card" style={{maxWidth:"25rem", margin:"1rem"}}>
            <div className="card-body">
              <div className={s.contenedor} >
             <h2 className="card-title">{name}</h2>
            </div>
            <div className={s.contenedor}>
            <h6>Precio por hora:</h6> <p className="card-text">${price}</p>
            </div>
                    
            
           <button onClick={e => removeItem(id)} className='btn btn-danger'>Eliminar del carrito</button>
            </div>
            </div>
           
            </div>
      )
}
