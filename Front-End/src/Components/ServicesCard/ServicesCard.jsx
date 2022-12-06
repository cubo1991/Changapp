import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../actions'
import s from './ServicesCard.module.css'



export const ServicesCard = ({name, price, description, id}) => {
 let dispatch = useDispatch()
 let cart = useSelector((state) => state.cart)
 const onClickBtn =() => {
  let verifier =(e) => e.id === id
  if(cart.some(verifier)) return;
  dispatch(addCart(id))
 } 
  return (
    <div >
        
        <div className="card" style={{maxWidth:"25rem", margin:"1rem"}}>
        <div className="card-body">
          <div className={s.contenedor}>
         <h2 className="card-title">{name}</h2>
        </div>
        <div className={s.contenedor}>
        <h6>Price per Hour:</h6> <p className="card-text">{price}</p>
        </div>
        <div className={s.contenedor}>
        <h6>Description:</h6><p className="card-text">{description}</p>
        </div>
        
        
        <button className='btn btn-primary' onClick={onClickBtn}>Agregar al Carrito</button>
        </div>
        </div>
        
        
        
        </div>
  )
}
