import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../actions'
import { CartItem } from '../../CartItem/CartItemCard'

export const Cart = () => {
let cart = useSelector((state) => state.cart)

let dispatch = useDispatch()
const removeItems = (id) =>{
 
  dispatch(removeItem(id))
}


 
    const cartMap = cart.map((service) => { 

      return <CartItem
      name={service.serviceType} price={service.pricePerHour} description={service.description} removeItem={removeItems} id={service.id} />})
 

 return (
 
  <div>
    {cartMap}
  </div>
 )
  
}
