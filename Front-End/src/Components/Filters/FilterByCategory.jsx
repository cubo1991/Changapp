
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterByCategory, getCategories } from "../../actions";
//import Cards from "./Cards";


export function FilterByCategory() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories())
    }, []);

    const categories = useSelector(state => state.categories);

    const [categoryValue, setCategoryValue] = useState();
    console.log(categories)


    function handleChange(e) {
        
        e.preventDefault();
        if(e.target.value === "default") return dispatch(filterByCategory(0)) 
        else dispatch(filterByCategory(e.target.value))

    }
    //const orderedGames = useSelector(state => state.orderedByRating)
    if (categories && categories.length > 1) {
        return (
            <div>
                <label>Filtrar por categoría: </label>
                <select onChange={(e) => handleChange(e)} value={categoryValue}>
                    <option value="default">
                        -- Selecciona una categora --
                    </option>
                    {categories.map(category => {
                        return <option key={category.id} value={category.id}>{category.name}</option>
                    })}
                </select>
            </div>
        )
    } else {
        return (<> Loading Category Filter</>)
    }

}