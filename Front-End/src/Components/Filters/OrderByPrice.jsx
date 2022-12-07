import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { orderByPrices } from "../../actions";


export function OrderByPrice ({index}){

  const dispatch = useDispatch();

  const allServices = useSelector(state => state.allServices)
  const services = useSelector(state => state.services)

  let filter;

  if(allServices.length > services.length){
    filter = services.map( element => element.serviceType).join();
  }

  return(

    <div>
      <label>Ordenar:</label>
      
      <select onChange={(e) => {
          e.preventDefault();
          dispatch(orderByPrices(e.target.value, filter))
      }}>
        <option value="ASC" onClick={(e) =>{
                            index(1);
                        }}>-- Por precios --</option>

        <option value="ASC" onClick={(e) =>{
                            index(1);
                        }}>De menor a mayor</option>

        <option value="DESC" onClick={(e) =>{
                            index(1);
                        }}>De mayor a menor</option>

      </select>
    
    </div>

  )

}