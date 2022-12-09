import React from 'react'


import { currentServices } from '../Home/Home.jsx'
import { ServicesCard } from '../ServicesCard/ServicesCard'


export const Services = () => {


  const services = currentServices?.map((service) => { 

    return <ServicesCard
    name={service.serviceType} price={service.pricePerHour} description={service.description} image={service.representative_image}/>})

  return (
    <div>
{services}

    </div>
  )
}
