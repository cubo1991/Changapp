
import { FilterByCategory } from "./FilterByCategory"
import { FilterByLocation } from "./FilterByLocation"


export default function NavFilters() {

    return (<nav>
        <ul class="nav justify-content-center">
        <FilterByCategory />
        <FilterByLocation />
        </ul>
    </nav>
    )

}
