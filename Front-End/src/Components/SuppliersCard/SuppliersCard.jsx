import React from 'react'
import { Link } from 'react-router-dom'

import s from './SuppliersCard.module.css'

export const SuppliersCard = ({name, cuit, description, details, id}) => {

  console.log(details)
  return (
    <div>
      <div className={s.card}>
 
    <Link to={'/suppliers/' + id}>    
    <h2>Name:</h2> <p>{name}</p>
    </Link>
    <h3>Cuit:</h3> <p>{cuit}</p>
    <h3>Description:</h3><p>{description}</p>
    <h3>Location:</h3><p>{details.location}</p>
    <h3>Adress:</h3><p>{details.adress}</p>
    </div>
      
      </div>
  )
}
