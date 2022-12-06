
import { FilterByCategory } from "./FilterByCategory"
import { FilterByLocation } from "./FilterByLocation"
import { OrderByPrice } from "./OrderByPrice"
import { OrderByServiceName } from "./OrderServicesByName"


export default function NavFilters({index}) {

    return (<nav>
        <FilterByCategory index={index} />
       {/*  <FilterByLocation /> */}
       <div>
        <OrderByPrice index={index}></OrderByPrice>
       {/*  <OrderByServiceName></OrderByServiceName> */}
        </div>
    </nav>
    )

}