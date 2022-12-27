import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSuppliers, searchingSuppliers } from '../../actions'
import style from "../Suppliers/Suppliers.module.css"
import Index from '../Index/Index.jsx';
import { searchingFalse } from '../../actions'



import { SuppliersCard } from '../SuppliersCard/SuppliersCard'

export const Suppliers = () => {
  let dispatch = useDispatch()
  let suppliers = useSelector((state) => state.suppliers)
  let [currentPage, setCurrentPage] = useState(1);
  const suppliersPerPage = 9
  let indexOfLastSupplier = currentPage * suppliersPerPage;
  let indexofFirstSupplier = indexOfLastSupplier - suppliersPerPage;
  const currentSuppliers = suppliers.slice(indexofFirstSupplier, indexOfLastSupplier);
  const searching = useSelector(state => state.searching)
  

  React.useEffect(
    () => {
      dispatch(getSuppliers())
      dispatch(searchingSuppliers())
    }, [dispatch])

    React.useEffect(
      () => {
        setCurrentPage(1)
      }, [suppliers])

  const index = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const suppliersMap = currentSuppliers.map((supplier) => {

    return <SuppliersCard
      name={supplier.name} cuit={supplier.cuit} description={supplier.description} id={supplier.id} details={supplier.Detail} logo={supplier.logo}/>
  })


  return (
    <div className={style.general}>
    <Index
        servicesPerPage={suppliersPerPage}
        allServices={suppliers.length}
        index={index}
        currentPage={currentPage}
      />

        {searching ?
              <button class="btn btn-secondary" onClick={() => {    /* renderiza un boton para volver a mostrar todos los servicios cuando se estan filtrando o usando la barra de busqueda */
                dispatch(getSuppliers())
                dispatch(searchingFalse())
                }}>
                  Volver a mostrar todos los servicios</button> : null}
      
      <div className={style.container}>
        {suppliersMap}
      </div>
      
    </div>
  )
}
