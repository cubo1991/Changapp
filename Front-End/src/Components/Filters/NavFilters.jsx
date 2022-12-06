
import { FilterByCategory } from "./FilterByCategory"
import { FilterByLocation } from "./FilterByLocation"


export default function NavFilters() {

    return (<nav>
        <FilterByCategory />
        <FilterByLocation />
    </nav>
    )

}