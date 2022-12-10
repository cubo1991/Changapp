import React from 'react'
import { Link } from 'react-router-dom'

import s from './SuppliersCard.module.css'

export const SuppliersCard = ({ name, cuit, description, details, id }) => {

  return (
    <div>
      <div className={s.container}>
          <div className={s.container1}>
            <p className={s.rating}>Raiting</p>
            <p>{details.location}</p>
          </div> 
          <div className={s.container2}>
          <Link to={'/suppliers/' + id}>
            <h2>{name}</h2>
          </Link>
           <p>{description}</p>
          </div>

        </div>
      </div>

  )
}
