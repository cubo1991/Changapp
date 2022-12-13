import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../actions'
import s from './ServicesCard.module.css'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';



export const ServicesCard = ({name, price, description, id, image}) => {
 let dispatch = useDispatch()
 let cart = useSelector((state) => state.cart)
 const onClickBtn =() => {
  let verifier =(e) => e.id === id
  if(cart.some(verifier)) return;
  dispatch(addCart(id))
 } 
  return (
    <div >
        
        <div className={`card, ${s.general}`} style={{maxWidth:"25rem", margin:"1rem"}}>
        <div className="card-body " >
          <img src={image} alt="" />
          <div className={s.contenedor}>
          <Link to={'/services/' + id}>
         <h2 className="card-title fs-4">{name}</h2>
          </Link>
        </div>
        <div className={s.contenedor}>
        <h6>Price per Hour:</h6> <p className="card-text">${price}</p>
        </div>
        <div className={s.contenedor}>
        <h6>Description:</h6><p className="card-text">{description}</p>
        </div>
        
        
        <p className='btn btn-primary fs-2 align-self-end' onClick={onClickBtn}><AiOutlineShoppingCart/></p>
        </div>
        </div>
        
        
        
        </div>
  )
}
