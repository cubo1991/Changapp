import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSuppliers, searchingSuppliers, searchingFalse } from '../../actions'


//import { Proveedores } from '../../Mockup/Proveedores'
import { SuppliersCard } from '../SuppliersCard/SuppliersCard'

export const Suppliers = () => {

  const dispatch = useDispatch();
  
  //ComponentDidMount
  useEffect( () => {
    dispatch(getSuppliers());
    dispatch(searchingSuppliers());   // settea un state global para que la barra de busqueda busque proveedor
  },[])
  
  
  const supp = useSelector(state => state.suppliers);
  const searching = useSelector(state => state.searching);

  const suppliers  = supp.map((proveedor) => { 

    return <SuppliersCard
    name={proveedor.name} cuit={proveedor.cuit} 
    description={proveedor.description} 
    details={proveedor.Detail}/> 
    
  });

 
  return (
    <div>

      { searching ? <button onClick={ () => {
        dispatch(getSuppliers());
        dispatch(searchingFalse());
      }}>Ver todos los proveedores</button> : null}  {/* Renderiza un boton para volver a mostar todos los proveedores */}
      
      {suppliers}
    </div>
    
  )
}
