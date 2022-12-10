import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSuppliers, searchSuppliers } from '../../actions'
import style from "../Suppliers/Suppliers.module.css"
import Index from '../Index/Index.jsx';


import { SuppliersCard } from '../SuppliersCard/SuppliersCard'

export const Suppliers = () => {
  let dispatch = useDispatch()
  let suppliers = useSelector((state) => state.suppliers)

  let [currentPage, setCurrentPage] = useState(1);
  let [suppliersPerPage, setSuppliersPerPage] = useState(9);
  let indexOfLastSupplier = currentPage * suppliersPerPage;
  let indexofFirstSupplier = indexOfLastSupplier - suppliersPerPage;
  const currentSuppliers = suppliers.slice(indexofFirstSupplier, indexOfLastSupplier);

  React.useEffect(
    () => {
      dispatch(getSuppliers())
    }, [])

  const index = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const suppliersMap = currentSuppliers.map((supplier) => {

    return <SuppliersCard
      name={supplier.name} cuit={supplier.cuit} description={supplier.description} id={supplier.id} details={supplier.Detail} />
  })


  return (
    <div className={style.general}>
    <Index
        servicesPerPage={suppliersPerPage}
        allServices={suppliers.length}
        index={index}
        currentPage={currentPage}
      />
    <div className={style.container}>

      

      {suppliersMap}
    </div>
    </div>

  )
}
