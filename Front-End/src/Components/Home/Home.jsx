
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import style from "../Home/Home.module.css"


import { getServices, searchingFalse, searchingServices, sendContractNotification } from '../../actions/index.js';

// import { Servicios } from '../../Mockup/Servicios.js';
import Index from '../Index/Index.jsx';
import { ServicesCard } from '../ServicesCard/ServicesCard.jsx';
// import { Footer } from '../Footer/Footer.jsx';
import NavFilters from '../Filters/NavFilters';
import Loading from '../Loading/Loading';


export default function Home() {
  const dispatch = useDispatch();
  const { pathname } = useLocation()
React.useEffect(() => {
  window.scrollTo(-10, 0);
}, [pathname]);
  const loading = useSelector((state) => state.loading)
  const allServices = useSelector((state) => state.services)
  const searching = useSelector(state => state.searching);
  const [currentPage, setCurrentPage] = useState(1)
  // const [servicesPerPage, setServicesPerPage] = useState(9)
  const servicesPerPage = 9; // Volvemos a usarlo como estado cuando le demos funcionalidad
  const indexOfLastService = currentPage * servicesPerPage//3
  const indexOfFirstService = indexOfLastService - servicesPerPage//0
  const currentServices = allServices.slice(indexOfFirstService, indexOfLastService)



  // const estadoLocalVacío = () => { setServicesPerPage() };

  // console.log(estadoLocalVacío);


  const index = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

   //Envio de mailing de notificación
   const location = useLocation()
   //console.log(location, "LOCATION")
   useEffect( () => {
   
   if(location.search.includes("success")){
     let status = location.search.split("&")
     .filter( (element) => element.includes("success"))
     .join().split("=");
     status = status[1];   //estado de la compra
 
     let email = location.search.split("&")
     .filter( (element) => element.includes("em"))
     .join().split("=");
     email = email[1];     //email del comprador
     
     dispatch(sendContractNotification(status,email))
   }
   // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [dispatch])
    //

  useEffect(() => {
    dispatch(getServices());
    dispatch(searchingServices()); //settea un estado global para que la barra de busqueda busque servicios
  }, [dispatch])

  useEffect(() => {
    setCurrentPage(1); //Cada vez que el estado cambie setea la pagina 1
  }, [allServices])

  // console.log(currentServices)

  return (
    <div className={style.general}>
      {
        !loading ?

          <div >
{/*carrusel*/}
<div id="carouselExampleCaptions" className={`carousel slide, ${style.carrusel}`} data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    
    <div className="carousel-item active">
      <img src='https://marketingblanco.com/imagenes/los-mejores-consejos-de-marketing-para-empresas-de-servicios-para-el-hogar.jpg' className="d-block w-100" style={{height:"15rem"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className={style.title}>Encontrá el servicio que estás buscando</h1>
       
      </div>
    </div>
    
      
    <div className="carousel-item">
      <img src='https://mattushop.com.ar/wp-content/uploads/2015/03/bannerMercadoPago.jpg' className="d-block w-100" style={{height:"15rem"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">

      </div>
    </div>
    
    
    <div className="carousel-item">
      <img src='https://png.pngtree.com/thumb_back/fh260/background/20220523/pngtree-cleaning-service-flat-background-with-group-of-young-women-in-uniform-image_1391520.jpg' className="d-block w-100" style={{height:"15rem"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className={style.title}>10% OFF en todos los servicios de Limpieza</h1>

      </div>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden" >Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden" >Next</span>
  </button>
</div>
        <div className={style.filter}>
          <div className={style.navTop}> 
          <span className={style.countServices}>Se encontraron {allServices.length} Servicios</span>
        <NavFilters index={index}></NavFilters>
        </div>
            {searching ?
              <button class="btn btn-secondary" onClick={() => {    /* renderiza un boton para volver a mostrar todos los servicios cuando se estan filtrando o usando la barra de busqueda */
                dispatch(getServices())
                dispatch(searchingFalse())
              }}>
                Volver a mostrar todos los servicios</button> : null}
        </div>
  


            {/* <div>servicios</div> */}
            <div className={style.cards}>
              {currentServices?.map(service => {
                return (
                  <ServicesCard id={service.id} name={service.serviceType} price={service.pricePerHour} description={service.description} image={service.representative_image}
                  />
                )
              })}
            </div>

            <Index
              servicesPerPage={servicesPerPage}
              allServices={allServices.length}
              index={index}
              currentPage={currentPage}
            />

            {/* <Footer /> */}
          </div>
          :
          <Loading />
      }
    </div>


  )
}
