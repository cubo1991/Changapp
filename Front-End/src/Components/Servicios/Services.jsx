import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../actions'



import { ServicesCard } from '../ServicesCard/ServicesCard'


export const Services = () => {
  let dispatch = useDispatch()
  let services = useSelector((state) =>state.services )
  
  React.useEffect(
    ()=>{
   
        dispatch(getServices())        
          


      }, [dispatch])

  const servicesMap = services.map((service) => { 

    return <ServicesCard
    name={service.serviceType} price={service.pricePerHour} description={service.description} />})

  return (
    <div>
{servicesMap}

    </div>
  )
}
