import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeItem } from '../../actions'
import { CartItem } from '../../CartItem/CartItemCard'
import s from './Cart.module.css'


export const Cart = () => {
  
let cart = useSelector((state) => state.cart)


let dispatch = useDispatch()
const removeItems = (id) =>{ 
  dispatch(removeItem(id))
}

let totalCart = 0
 
    const cartMap = cart.map((service) => { 
      totalCart +=  Number(service.pricePerHour)

      return <CartItem
      name={service.serviceType} price={service.pricePerHour} description={service.description} removeItem={removeItems} id={service.id} />})
 
     
 return (
 
  <div style={{height: "50rem"}}> 
   {cart.length > 0 ? 
   <div>
   <div className={`container-fluid d-flex flex-wrap ${s.contenedorItems}`}>
    {cartMap}

  
    </div>
    <div className='container-fluid' style={{paddingTop: "2rem"}}>
      <h2>Total: ${totalCart} </h2>
      <button className='btn btn-success'>Pagar</button>
      </div>
      </div>
     : ""} 
    {cart.length < 1 ?
    <div className={`container-fluid ${s.contenedor}`}>
    <div className={`container-fluid ${s.emptyCart}`}>
<h3>Tu carrito está vacio</h3>
 <p>¡Mirá todos los servicios que podés contratar!</p>
 <NavLink
          
            to="/"
          >
            <div>
              <button className='btn btn-primary'>Explorar servicios</button>
            </div>
          </NavLink>
    </div>
    </div>
    : <NavLink to='/buy'><button type="button" class="btn btn-primary">Comprar</button></NavLink>
    }
  </div>
 )
  
}
