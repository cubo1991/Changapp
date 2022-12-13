
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByLocation, getLocations } from "../../actions";
//import Cards from "./Cards";

import s from "./FilterByLocation.module.css"

export function FilterByLocation() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLocations())
    }, [dispatch])


    const locations = useSelector(state => state.location);

    function handleChange(e) {

        e.preventDefault()
        if (e.target.value === "default") return dispatch(filterByLocation("undefined"))
        else dispatch(filterByLocation(e.target.value))

    }

    if (locations && locations.length >= 1) {
        return (
            <div className={s.general}>
                <label>Filtrar por ubicación:</label>
                <select class="form-select" aria-label="Default select example" onChange={(e) => handleChange(e)} className={s.select}>
                    <option value="default">
                        -- Selecciona una ubicación --
                    </option>
                    {locations.map(item => {
                        return <option key={Math.random() * 10} value={item.location}>{item.location}</option>
                    })}
                </select>
            </div>
        )
    } else {
        return (<> No Location in Services</>)
    }

}