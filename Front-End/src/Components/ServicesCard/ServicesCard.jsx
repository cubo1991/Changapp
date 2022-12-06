import React from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../../actions'
import s from './ServicesCard.module.css'



export const ServicesCard = ({name, price, description, id}) => {
 let dispatch = useDispatch()
 const onClickBtn =() => {
  dispatch(addCart(id))
 } 
  return (
    <div >
        
        <div className="card" style={{maxWidth:"25rem", margin:"1rem"}}>
        <div className="card-body">
          <div className={s.contenedor}>
         <h5 className="card-title">{name}</h5>
        </div>
        <div className={s.contenedor}>
        <h6>Price per Hour:</h6> <p className="card-text">{price}</p>
        </div>
        <div className={s.contenedor}>
        <h6>Description:</h6><p className="card-text">{description}</p>
        </div>
        </div>
        
        <button className='btn btn-primary' onClick={onClickBtn}>Agregar al Carrito</button>
        
        </div>
        
        
        
        </div>
  )
}
