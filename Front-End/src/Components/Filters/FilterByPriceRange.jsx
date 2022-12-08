import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react'
import { addServices, searchingTrue } from "../../actions";

export function FilterByPriceRange (props){

  const services = useSelector(state => state.services)

  const dispatch = useDispatch();

  let [search, setSearch] = useState({
    minRange: 0,
    maxRange: 0
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
      setSearch({ minRange: 0, maxRange: 0});
    }
  }

  return (

    <form>
      <label>Rango de precios: &nbsp;</label>
      <input type="text" name="minRange" value={search.minRange} onChange={(e) => inputHandler(e)}/>&nbsp;
      -
      &nbsp;
      <input type="text" name="maxRange" value={search.maxRange} onChange={(e) => inputHandler(e)}/>
      &nbsp;
      <button onClick={(e) => orderHandler(e)}>Buscar</button>

    </form>

  )

}