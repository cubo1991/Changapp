import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSuppliers, searchingSuppliers } from "../../actions";
import style from "../Suppliers/Suppliers.module.css";
import Index from "../Index/Index.jsx";
import Loading from "../Loading/Loading";
import { searchingFalse } from "../../actions";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { SuppliersCard } from "../SuppliersCard/SuppliersCard";

export const Suppliers = () => {

  const loading = useSelector((state) => state.loading);
  let dispatch = useDispatch();
  let suppliers = useSelector((state) => state.suppliers);
  let [currentPage, setCurrentPage] = useState(1);
  const { user } = useAuth0();
  
  let suppliersAuth = suppliers.filter( element => element.isAuthorized) //Suppliers autorizados
  
  let suppliersList; // probablemente habra que pasarlo a un local state.

  if(user && (user.user_role === "Admin" || user.user_role === "SuperAdmin")){
    suppliersList = suppliers;
  }else {
    suppliersList = suppliersAuth
  }
  
  //Variables de paginacion
  const suppliersPerPage = 9;
  let indexOfLastSupplier = currentPage * suppliersPerPage;
  let indexofFirstSupplier = indexOfLastSupplier - suppliersPerPage;
  const currentSuppliers = suppliersList.slice(   
    indexofFirstSupplier,
    indexOfLastSupplier
    );
    const searching = useSelector((state) => state.searching);
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  React.useEffect(() => {
    dispatch(getSuppliers());
    dispatch(searchingSuppliers());
  }, [dispatch]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [suppliers]);

  const index = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const suppliersMap = currentSuppliers.map((supplier) => {
    
      return (
        <SuppliersCard
          name={supplier.name}
          cuit={supplier.cuit}
          description={supplier.description}
          id={supplier.id}
          details={supplier.Detail}
          logo={supplier.logo}
          rating = { supplier.avgRating }
        />
      );

  });

  return loading ? (
    <Loading />
  ) : (
    <div className={style.general}>
      
      {suppliersMap[0] ? <Index
        servicesPerPage={suppliersPerPage}
        allServices={suppliersList.length}
        index={index}
        currentPage={currentPage}
      /> : "Agregar un loading aca"}   {/* ACOMODAR ESTE MENSAJE */}

      {searching ? (
        <button
          class="btn btn-secondary"
          onClick={() => {
            /* renderiza un boton para volver a mostrar todos los servicios cuando se estan filtrando o usando la barra de busqueda */
            dispatch(getSuppliers());
            dispatch(searchingFalse());
          }}
        >
          Volver a mostrar todos los servicios
        </button>
      ) : null}

      <div className={style.container}>{suppliersMap}</div>
    </div>
  );
};
