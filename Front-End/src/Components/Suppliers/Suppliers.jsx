import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSuppliers } from '../../actions'


//import { Proveedores } from '../../Mockup/Proveedores'
import { SuppliersCard } from '../SuppliersCard/SuppliersCard'

export const Suppliers = () => {

  const dispatch = useDispatch();
  
  //ComponentDidMount
  useEffect( () => {
    dispatch(getSuppliers());
  },[])
  
  
  const supp = useSelector(state => state.suppliers);

  console.log(supp)


  const suppliers  = supp.map((proveedor) => { 

    return <SuppliersCard
    name={proveedor.name} cuit={proveedor.cuit} 
    description={proveedor.description} 
    details={proveedor.Detail} 
    /*adress={proveedor.Details.addres} */ /> });

 
  return (
    <div>
{suppliers}
    </div>
    
  )
}
