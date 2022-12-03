import React from 'react'
import s from './ServicesCard.module.css'

export const ServicesCard = ({name, price, description}) => {
  return (
    <div>
        
        <div className={s.card}>
        <h2>Name:</h2> <p>{name}</p>
        <h3>Price per Hour:</h3> <p>{price}</p>
        <h3>Description:</h3><p>{description}</p>
        </div>
        
        
        
        </div>
  )
}
