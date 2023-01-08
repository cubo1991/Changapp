import { FilterByCategory } from "./FilterByCategory";
import { FilterByLocation } from "./FilterByLocation";
import { OrderByPrice } from "./OrderByPrice";

import s from "./NavFilters.module.css";
import { FilterByPriceRange } from "./FilterByPriceRange";

export default function NavFilters({ index }) {
  return (
    <nav className={s.container}>
      <a
        class={`btn btn-primary ${s.botonfiltros}`}
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Filtros
      </a>

      <div
        class={`offcanvas offcanvas-start ${s.slideNav}`}
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <button
          type="button"
          className={s.closeButton}
          data-bs-dismiss="offcanvas"
        >
          X
        </button>
        <ul>
          {/* OrderByLocatiion y OrderByNAme incompletos */}
          {/* <FilterByCategory index={index} />
   <OrderByServiceName></OrderByServiceName> 
     */}
          <FilterByPriceRange />
          <FilterByLocation />{" "}
          {/* Funciona, pero la data que llena la db esta mockeada incompleta, ejem hay user sin roles / hay suppliers con UserLocation. */}
          <FilterByCategory index={index} />
          <OrderByPrice index={index}></OrderByPrice>
        </ul>
      </div>
    </nav>
  );
}
