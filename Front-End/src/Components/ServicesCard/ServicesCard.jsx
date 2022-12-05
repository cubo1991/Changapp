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
    <div>
        
        <div className={s.card}>
        <h2>Name:</h2> <p>{name}</p>
        <h3>Price per Hour:</h3> <p>{price}</p>
        <h3>Description:</h3><p>{description}</p>
        <button onClick={onClickBtn}>Agregar al Carrito</button>
        <h4>{id}</h4>
        </div>
        
        
        
        </div>
  )
}
