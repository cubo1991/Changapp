import React from 'react'

export const SuppliersDetailCard = ({name, id, cuit, description}) => {
    return (
        <div>
          <div>
        <h2>Name:</h2> <p>{name}</p>
        <h3>Cuit:</h3> <p>{cuit}</p>
        <h3>Description:</h3><p>{description}</p>
        <button> Click me</button>
        </div>
          
          </div>      
  )
}
