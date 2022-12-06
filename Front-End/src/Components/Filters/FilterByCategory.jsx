
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterByCategory, getCategories } from "../../actions";
//import Cards from "./Cards";


export function FilterByCategory() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategories(), [dispatch])
    })
    const categories = useSelector(state => state.categories)


    function handleChange(e) {
        //
        e.preventDefault()
        // if (e.target.value === 'default') return 'algo'


        dispatch(filterByCategory(e.target.value))


    }
    //const orderedGames = useSelector(state => state.orderedByRating)
    if (categories && categories.length > 1) {
        return (
            <div>

                <select onChange={(e) => handleChange(e)}>
                    <option value="default">
                        Filter by Categories:

                    </option>
                    {categories.map(category => {
                        (<option key={category.id} value={category.id}>{category.name}</option>)
                    })}
                </select>
            </div>
        )
    } else {
        return (<> Loading Category Filter</>)
    }

}