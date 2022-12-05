import React from 'react'
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux'
import { getSuppliers } from '../../actions'


import { Proveedores } from '../../Mocks/Proveedores'
=======
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSuppliers, searchingSuppliers, searchingFalse } from '../../actions'


//import { Proveedores } from '../../Mockup/Proveedores'
>>>>>>> 837b15487b00e44fa1abfd11991e4690315e640c
import { SuppliersCard } from '../SuppliersCard/SuppliersCard'

export const Suppliers = () => {
let dispatch = useDispatch()
let suppliers = useSelector((state) => state.suppliers)
  React.useEffect(
    ()=>{
   
        dispatch(getSuppliers())        
          

<<<<<<< HEAD

      }, [dispatch])


  const suppliersMap  = suppliers.map((supplier) => { 

    return <SuppliersCard
    name={supplier.name} cuit={supplier.cuit} description={supplier.description} id={supplier.id} />})
=======
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
>>>>>>> 837b15487b00e44fa1abfd11991e4690315e640c

 
  return (
    <div>
<<<<<<< HEAD
{suppliersMap}
=======

      { searching ? <button onClick={ () => {
        dispatch(getSuppliers());
        dispatch(searchingFalse());
      }}>Ver todos los proveedores</button> : null}  {/* Renderiza un boton para volver a mostar todos los proveedores */}
      
      {suppliers}
>>>>>>> 837b15487b00e44fa1abfd11991e4690315e640c
    </div>
    
  )
}
