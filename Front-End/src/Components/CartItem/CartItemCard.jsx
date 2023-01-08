import React from 'react'
import { useDispatch } from 'react-redux'
import { resServicesPrice, sumServicesPrice } from '../../actions'
import s from './CartItemCard.module.css'

export const CartItem = ({name, price, description, removeItem, id, amount }) => {
  let [serviceAmount, setServiceAmount] = React.useState(amount)
  let [total, setTotal] = React.useState(Number(price))
 let dispatch =  useDispatch()
const removeService = () => {
  removeItem(id)
  dispatch(resServicesPrice(Number(total)))
}
  const changeAmount = (e) => {
 
    if (e.target.value === "-" && serviceAmount > 1) {
       setServiceAmount(serviceAmount - 1)
       setTotal((total-Number(price)))
       dispatch(resServicesPrice(Number(price)))
      
      }
    if (e.target.value === "+" && serviceAmount < 8) {
       setServiceAmount(serviceAmount + 1)
       setTotal(Number(total+Number(price)))
       dispatch(sumServicesPrice(Number(price)))
      }
  }

    return (
        <div className={s.card} >
            
            <div className="card container" style={{margin:"1rem", height:"18rem"}}>
            <div className="card-body row">
              <div className={s.contenedor} >
          {name.length < 14 ? <h2 className="card-title fs-3">{name}</h2> : <h2 className="card-title fs-4">{name}</h2> }   
            </div>
            <div>
            <button onClick={changeAmount} value="-">-</button>{serviceAmount} <button onClick={changeAmount} value="+">+</button>
            </div>
            <div className={s.contenedorPrecios}>
            <h6>Precio por hora:</h6> <p className="card-text">${price}</p>
            <h6>Precio total:</h6> <p className="card-text">${total}</p>
            </div>
                    
       

            <button onClick={removeService} className='btn btn-danger'>Eliminar del carrito</button>
           
            </div>
            
            </div>
           
            </div>
      )
}
