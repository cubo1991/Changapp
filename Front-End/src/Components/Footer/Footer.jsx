import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../Footer/Footer.css';
import s from './Footer.module.css'

export const Footer = () => {
let services = useSelector((state) => state.services)
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">

            <div className="col-lg-4 col-md-6">
              <h3>Sitio</h3>
              <ul className="list-unstyled three-column">
                <li>
                <NavLink
                  to="/" >
                  <span>Nuestros Servicios</span>

                </NavLink></li>
                <li> <NavLink
                  to="/suppliers" >
                  <span>Cartilla de Proveedores</span>

                </NavLink></li>
                <li><NavLink
                  to="/contact" >
                  <span>Contacto</span>

                </NavLink></li>
              </ul>
              <ul className="list-unstyled socila-list">
                
              <NavLink> <li><img src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png" alt="facebook" width='48px' height='48px' /></li></NavLink>
              <NavLink> <li><img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" alt="instagram" width='48px' height='48px' /></li></NavLink>
              <NavLink> <li><img src="https://cdn-icons-png.flaticon.com/128/1384/1384007.png" alt="wsp" width='48px' height='48px' /></li></NavLink>
              <NavLink> <li><img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="Lin" width='48px' height='48px' /></li></NavLink>

              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h3>Los más populares</h3>
              <div id="carouselExampleCaptions" className={`carousel slide, ${s.carrusel}`} data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    {services && services[0] && (
    <div className="carousel-item active">
      <img src={services[0].representative_image} className="d-block w-100" style={{width: "50rem"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{services[0].serviceType}</h5>
        <p>{services[0].description}</p>
      </div>
    </div>
    )}
      {services && services[5] && (
    <div className="carousel-item">
      <img src={services[5].representative_image} className="d-block w-100" style={{width: "50rem"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{services[5].serviceType}</h5>
        <p>{services[5].description}</p>
      </div>
    </div>
    )}
    { services && services[2] && (
    <div className="carousel-item">
      <img src={services[2].representative_image} className="d-block w-100" style={{width: "50rem"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{services[2].serviceType}</h5>
        <p>{services[2].description}</p>
      </div>
    </div>
    )}
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

            <div className="col-lg-4">
              <h3>Nuestro Trabajo</h3>
              <img className="img-thumbnail" src="https://images.ecestaticos.com/anTxwo5quWg8jF8T0rSe-p7OtEA=/126x8:2002x1412/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F3ab%2F572%2F211%2F3ab572211695c110c2d269223ae9cd17.jpg" alt="Limpieza de hogares" width='150px' height='100px' />
              <img className="img-thumbnail" src="https://enciclopedia.net/wp-content/uploads/2013/11/jardineria.jpg" alt="jardinería" width='150px' height='100px' />
              <img className="img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ibW8oaJmNLZOrtiAp4ZIpSP2JwdVRQHcig&usqp=CAU" alt="pintura" width='150px' height='100px' />
              <img className="img-thumbnail" src="https://www.vaporchile.cl/img/limpieza-de-tapiz-lavado-santiago-chile.jpg" alt="limpieza de sofá" width='150px' height='100px' />
            </div>

          </div>
        </div>
        <div className="copyright text-center">
          Copyright &copy; 2022 <span>E-commerce Services</span>
        </div>
      </footer>
    </div>
  )
}


