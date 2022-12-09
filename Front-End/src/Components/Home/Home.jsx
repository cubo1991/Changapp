
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from "../Home/Home.module.css"


import { getServices, searchingFalse, searchingServices } from '../../actions/index.js';

// import { Servicios } from '../../Mockup/Servicios.js';
import Index from '../Index/Index.jsx';
import { ServicesCard } from '../ServicesCard/ServicesCard.jsx';
import { Footer } from '../Footer/Footer.jsx';
import NavFilters from '../Filters/NavFilters';


export default function Home() {
  const dispatch = useDispatch();
  const allServices = useSelector((state) => state.services)
  const searching = useSelector( state => state.searching);
  const [currentPage, setCurrentPage] = useState(1)
  const [servicesPerPage, setServicesPerPage] = useState(9)
  const indexOfLastService = currentPage * servicesPerPage//3
  const indexOfFirstService = indexOfLastService - servicesPerPage//0
  const currentServices = allServices.slice(indexOfFirstService, indexOfLastService)



  const estadoLocalVacío = () => { setServicesPerPage() };

  // console.log(estadoLocalVacío);


  const index = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    dispatch(getServices());
    dispatch(searchingServices()); //settea un estado global para que la barra de busqueda busque servicios
  }, [dispatch])

  // console.log(currentServices)

  return (

    <div className={style.general}>
      
<br />
      <NavFilters index ={index}></NavFilters> <br />
      <Index
        servicesPerPage={servicesPerPage}
        allServices={allServices.length}
        index={index}
        currentPage={currentPage}
      />

      { searching ? 
      <button onClick={ () =>{    /* renderiza un boton para volver a mostrar todos los servicios cuando se estan filtrando o usando la barra de busqueda */
        dispatch(getServices())
        dispatch(searchingFalse())}}>
        Volver a mostrar todos los servicios</button> : null}

      
      {/* <div>servicios</div> */}
      <div className={style.cards}>
        {currentServices?.map(service => {
          return (
              <ServicesCard id={service.id}  name={service.serviceType} price={service.pricePerHour} description={service.description} image={service.representative_image}
              />
                    )
        })}
      </div>

      <Footer />
    </div>


  )
}
