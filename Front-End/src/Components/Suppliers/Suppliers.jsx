import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSuppliers, searchSuppliers } from '../../actions'
import style from "../Suppliers/Suppliers.module.css"



import { SuppliersCard } from '../SuppliersCard/SuppliersCard'

export const Suppliers = () => {
let dispatch = useDispatch()
let suppliers = useSelector((state) => state.suppliers)
  
React.useEffect(
    ()=>{
        dispatch(getSuppliers())      
      }, [])

  const suppliersMap  = suppliers.map((supplier) => { 

    return <SuppliersCard
    name={supplier.name} cuit={supplier.cuit} description={supplier.description} id={supplier.id} details={supplier.Detail} />})

 
  return (
    <div className={style.container}>
{suppliersMap}
    </div>
    
  )
}
