
import { FilterByCategory } from "./FilterByCategory"
import { FilterByLocation } from "./FilterByLocation"
import { OrderByPrice } from "./OrderByPrice"
import { OrderByServiceName } from "./OrderServicesByName"
import s from './NavFilters.module.css';
import { FilterByPriceRange } from "./FilterByPriceRange";


export default function NavFilters({index}) {

    return (
    
    <nav>
        {/* OrderByLocatiion y OrderByNAme incompletos */}
        {/* <FilterByCategory index={index} />
       <OrderByServiceName></OrderByServiceName> 
        */}

        <FilterByPriceRange/>

        <ul className="nav justify-content-center">
        <FilterByLocation />    {/* Funciona, pero la data que llena la db esta mockeada incompleta, ejem hay user sin roles / hay suppliers con UserLocation. */}    
        <FilterByCategory index={index} />
        <OrderByPrice index={index}></OrderByPrice>
        </ul>
    </nav>
    )

}
