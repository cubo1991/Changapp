import React from 'react'

import s from './SuppliersCard.module.css'

export const SuppliersCard = ({name, cuit, description, details}) => {

  console.log(details)
  return (
    <div>
      <div className={s.card}>
    <h2>Name:</h2> <p>{name}</p>
    <h3>Cuit:</h3> <p>{cuit}</p>
    <h3>Description:</h3><p>{description}</p>
    <h3>Ubicación: </h3> <p>{details.location}</p>
    <h3>Dirección: </h3> <p>{details.adress}</p>
    </div>
      
      </div>
  )
}
