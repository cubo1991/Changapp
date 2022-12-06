import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSuppliers } from '../../actions'



import { SuppliersCard } from '../SuppliersCard/SuppliersCard'

export const Suppliers = () => {
let dispatch = useDispatch()
let suppliers = useSelector((state) => state.suppliers)
  React.useEffect(
    ()=>{
   
        dispatch(getSuppliers())        
          


      }, [dispatch])


  const suppliersMap  = suppliers.map((supplier) => { 

    return <SuppliersCard
    name={supplier.name} cuit={supplier.cuit} description={supplier.description} id={supplier.id} details={supplier.detail} />})

 
  return (
    <div>
{suppliersMap}
    </div>
    
  )
}
