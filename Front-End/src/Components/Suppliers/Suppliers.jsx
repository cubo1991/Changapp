import React from 'react'


import { Proveedores } from '../../Mockup/Proveedores'
import { SuppliersCard } from '../SuppliersCard/SuppliersCard'

export const Suppliers = () => {

  const suppliers  = Proveedores.map((proveedor) => { 

    return <SuppliersCard
    name={proveedor.name} cuit={proveedor.cuit} description={proveedor.description} />})

 
  return (
    <div>
{suppliers}
    </div>
    
  )
}
