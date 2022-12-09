import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import { addServices, searchingTrue } from "../../actions";


import s from "./FilterByPriceRange.module.css"


export function FilterByPriceRange (props){

  const services = useSelector(state => state.services)

  const dispatch = useDispatch();

  let [search, setSearch] = useState({
    minRange: null,
    maxRange: null
  })

  const inputHandler = (e) => {

    setSearch( prev => {
      return {
        ...prev,
        [e.target.name]: parseFloat(e.target.value)
      }
    })
  }

  const orderHandler = (e) => {
    e.preventDefault();

    let result = services.filter( item => item.pricePerHour >= search.minRange && item.pricePerHour <= search.maxRange )
    
    if(search.minRange < search.maxRange || search.maxRange > 0){
      dispatch(addServices(result));
      dispatch(searchingTrue());
      setSearch({ minRange: "", maxRange: ""});
    }
  }

  return (

    <form className={s.general}>
      <label>Rango de precios:</label> <br />
      <input type="text" name="minRange" value={search.minRange} onChange={(e) => inputHandler(e)} placeholder="Min Price"/>

      <input type="text" name="maxRange" value={search.maxRange} onChange={(e) => inputHandler(e)} placeholder="Max Price"/>
   <br />
      <button onClick={(e) => orderHandler(e)}>Buscar</button>

    </form>

  )

}