import React from 'react'
import { Link } from 'react-router-dom'

import s from './SuppliersCard.module.css'

export const SuppliersCard = ({ name, cuit, description, details, id }) => {

  console.log(details)
  return (
    <div>
      <div className="card" style={{ maxWidth: "25rem", margin: "1rem" }}>
        <div className="card-body">
          <Link to={'/suppliers/' + id}>
            <h2 className="card-title">{name}</h2>
          </Link>
          <div className={s.contenedor}>
            <h6>Cuit:</h6> <p>{cuit}</p>
          </div>
          <div className={s.contenedor}>
            <h6 >Description:</h6><p>{description}</p>
          </div>
          <div className={s.contenedor}>
            <h6>Location:</h6><p>{details.location}</p>
          </div>
          <div className={s.contenedor}>
            <h6>Adress:</h6><p>{details.adress}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
