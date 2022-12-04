import React from 'react'


import { servicios } from '../../Mockup/Servicios'
import { ServicesCard } from '../ServicesCard/ServicesCard'


export const Services = () => {


  const services = servicios.map((service) => { 

    return <ServicesCard
    name={service.serviceType} price={service.pricePerHour} description={service.description} />})

  return (
    <div>
{services}

    </div>
  )
}
