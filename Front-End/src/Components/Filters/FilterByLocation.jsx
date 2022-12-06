
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterByLocation } from "../../actions";
//import Cards from "./Cards";


export function FilterByLocation() {
    const dispatch = useDispatch()
    const services = useSelector(state => state.services)
    const locations = services.map(service => service.location)

    function handleChange(e) {
        //
        e.preventDefault()
        // if (e.target.value === 'default') return 'algo'


        dispatch(filterByLocation(e.target.value))


    }
    //const orderedGames = useSelector(state => state.orderedByRating)
    if (locations && locations.length > 1) {
        return (
            <div>

                <select onChange={(e) => handleChange(e)}>
                    <option value="default">
                        Filter by Locations:

                    </option>
                    {locations.map(location => {
                        (<option value={location}>{location}</option>)
                    })}
                </select>
            </div>
        )
    } else {
        return (<> No Location in Services</>)
    }

}