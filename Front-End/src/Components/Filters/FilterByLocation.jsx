
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterByLocation, getLocations } from "../../actions";
//import Cards from "./Cards";


export function FilterByLocation() {

    useEffect( () => {
        dispatch(getLocations())
    }, [])

    const dispatch = useDispatch();

    const locations = useSelector(state => state.location);

    function handleChange(e) {

        e.preventDefault()
        if(e.target.value = "default") return dispatch(filterByLocation("undefined"))
        else dispatch(filterByLocation(e.target.value))
    
    }

    if (locations && locations.length > 1) {
        return (
            <div>
                <label>Filtrar por ubicación</label>
                <select class="form-select" aria-label="Default select example" onChange={(e) => handleChange(e)}>
                    <option value="default">
                        -- Selecciona una ubicación --

                    </option>
                    { locations.map(location => {
                        return <option key={Math.random()*10} value={location}>{location}</option>
                    }) }
                </select>
            </div>
        )
    } else {
        return (<> No Location in Services</>)
    }

}