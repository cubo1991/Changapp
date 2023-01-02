import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../actions'
import s from './ServicesCard.module.css'
import { Link } from 'react-router-dom'
import { BsFillCartFill, BsFillCartCheckFill } from 'react-icons/bs';



export const ServicesCard = ({name, price, description, id, image}) => {
 let dispatch = useDispatch()
 let cart = useSelector((state) => state.cart)
 const onClickBtn =() => {
  let verifier =(e) => e.id === id
  if(cart.some(verifier)) return;
  dispatch(addCart(id))
 } 

 const idCart =  (element) => element.id === id
//  console.log(cart.some(idCart))

  return (
    <div >
        <Link to={'/services/' + id}>
        <div className={`card, ${s.general}`} style={{maxWidth:"25rem", margin:"1rem"}}>
        <div className="card-body " >
          <img src={image} alt="" />
          <div className={s.contenedor}>
         <h2 className="card-title fs-4">{name}</h2>
        </div>
        <div className={s.contenedor}>
        <p className="card-text" style={{color:"white"}}>${price}/hr</p>
        </div>
       { cart.some(idCart) === false ?  <p className='btn btn-primary fs-2 align-self-end' onClick={onClickBtn}><BsFillCartFill/></p> : <p className='btn btn-primary fs-2 align-self-end' style={{background: "green", cursor: "default"}}><BsFillCartCheckFill/></p>

       }
        </div>
        </div>
        </Link>
        </div>
  )
}
