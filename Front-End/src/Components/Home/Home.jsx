
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import { getServices } from '../../actions/index.js';

// import { Servicios } from '../../Mockup/Servicios.js';
import Index from '../Index/Index.jsx';
import { ServicesCard } from '../ServicesCard/ServicesCard.jsx';
import { Footer } from '../Footer/Footer.jsx';


export default function Home() {
  const dispatch = useDispatch();
  const allServices = useSelector((state) => state.services)
  const [currentPage, setCurrentPage] = useState(1)
  const [servicesPerPage, setServicesPerPage] = useState(3)
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
  }, [dispatch])

  // console.log(currentServices)

  return (

    <div>
      <Index
        servicesPerPage={servicesPerPage}
        allServices={allServices.length}
        index={index}
      />

      {/* <div>servicios</div> */}
      <div>
        {currentServices?.map(service => {
          return (
              <ServicesCard  name={service.serviceType} price={service.pricePerHour} description={service.description}
              />
                    )
        })}
      </div>

      <Footer />
    </div>


  )
}
