import { useDispatch, useSelector } from "react-redux";
import { addServices } from "../../actions";


export function OrderByServiceName (){

  const allServices = useSelector(state => state.allServices)
  const services = useSelector(state => state.services)

  const dispatch = useDispatch();

  const changeHandler = (e, array) =>{
    let result = []
    if(e.target.value === "DESC"){
    result = array.sort( (a,b) => {
            if(a.serviceType > b.serviceType) return 1;
            if(b.serviceType < a.serviceType) return -1;
            return 0;
      })
    }else if(e.target.value === "ASC"){
   result = array.sort( (a,b) => {
            if(a.serviceType > b.serviceType) return -1;
            if(a.serviceType < b.serviceType) return 1;
            return 0;
      })
    }
    
    dispatch(addServices(result))
  }

return (
  <div>
    
    <select name="orderNane" onChange={
      (e) => {
        if(allServices > services) changeHandler(e, services)
        else changeHandler(e, allServices)
      }
    }>

    <option value="DESC">-- Por nombre de servicio --</option>
  
    <option value="DESC">A-Z</option>

    <option value="ASC">Z-A</option>

    </select>

  </div>
)

}