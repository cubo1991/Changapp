
import { FilterByCategory } from "./FilterByCategory"
import { FilterByLocation } from "./FilterByLocation"


export function NavFilters() {

    return (<nav>
        <FilterByCategory />
        <FilterByLocation />
    </nav>
    )

}