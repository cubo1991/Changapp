import React from 'react'
import s from './CartItemCard.module.css'

export const CartItem = ({name, price, description, removeItem, id }) => {
   
    return (
        <div className={s.card} >
            
            <div className="card container" style={{margin:"1rem", height:"18rem"}}>
            <div className="card-body row">
              <div className={s.contenedor} >
          {name.length < 14 ? <h2 className="card-title fs-3">{name}</h2> : <h2 className="card-title fs-4">{name}</h2> }   
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
