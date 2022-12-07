
import { FilterByCategory } from "./FilterByCategory"
import { FilterByLocation } from "./FilterByLocation"
import { OrderByPrice } from "./OrderByPrice"
import { OrderByServiceName } from "./OrderServicesByName"


export default function NavFilters({index}) {

    return (
    
    <nav>
        {/* OrderByLocatiion y OrderByNAme incompletos */}
        {/* <FilterByCategory index={index} />
        <FilterByLocation />
       <div>
        <OrderByPrice index={index}></OrderByPrice>
        <OrderByServiceName></OrderByServiceName> 
        </div> */}
        <ul class="nav justify-content-center">
        <FilterByCategory index={index} />
        <OrderByPrice index={index}></OrderByPrice>
        </ul>
    </nav>
    )

}
