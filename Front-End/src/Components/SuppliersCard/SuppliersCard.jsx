import React from 'react'
import { Link } from 'react-router-dom'

import s from './SuppliersCard.module.css'

export const SuppliersCard = ({ name, cuit, description, details, id, logo, rating }) => {

  return (
    <div>
      <Link to={'/suppliers/' + id}>
      <div className={s.container}>
          <div className={s.container1}>
            <p className={s.rating}>{Math.round(rating)}</p>
            <p>{details.location}</p>
          </div> 
          <div className={s.container2}>
            <div>
              <img src={logo} alt='logo' width='100px' heigth='100px'/>
            </div>
            <div className={s.container3}>
            <h2>{name}</h2>
           <p className={s.container4}>{description}</p>
           </div>
          </div>
        </div>
        </Link>
      </div>

  )
}
