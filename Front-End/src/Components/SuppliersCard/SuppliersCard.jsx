import React from 'react'
import { Link } from 'react-router-dom'

import s from './SuppliersCard.module.css'

<<<<<<< HEAD
export const SuppliersCard = ({name, cuit, description, id}) => {

 
=======
export const SuppliersCard = ({name, cuit, description, details}) => {

  console.log(details)
>>>>>>> 837b15487b00e44fa1abfd11991e4690315e640c
  return (
    <div>
      <div className={s.card}>
 
    <Link to={'/suppliers/' + id}>    
    <h2>Name:</h2> <p>{name}</p>
    </Link>
    <h3>Cuit:</h3> <p>{cuit}</p>
    <h3>Description:</h3><p>{description}</p>
    <h3>Ubicación: </h3> <p>{details.location}</p>
    <h3>Dirección: </h3> <p>{details.adress}</p>
    </div>
      
      </div>
  )
}
