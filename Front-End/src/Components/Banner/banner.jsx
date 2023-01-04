import React from 'react';
import style from '../Banner/banner.module.css';

export default function Banner () {

    return (
        <div>
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
        </div>
    )
}