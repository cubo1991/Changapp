import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetails } from '../../actions'
import { SuppliersDetailCard } from './SuppliersDetailCard'



export const SuppliersDetail = (props) => {
  let dispatch = useDispatch()
  let supplierDetail = useSelector((state)=> state.supplierDetails)
 let params = useParams()

  React.useEffect(
    ()=>{
   
        dispatch(getDetails(params.id))        
          


      }, [dispatch,params.id])
  return (
    <div>

      <h2> Rating:  </h2> {params.id}
      <SuppliersDetailCard  name={supplierDetail.name} cuit={supplierDetail.cuit} description={supplierDetail.description} id={supplierDetail.id}/>
      
    </div>
  )
}
