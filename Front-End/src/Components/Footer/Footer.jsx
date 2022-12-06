import React from 'react';
import '../Footer/Footer.css';

export const Footer = () => {
  return (
    <div>
<footer>
  <div class="container">
    <div class="row">
      
      <div class="col-lg-4 col-md-6">
        <h3>Sitio</h3>
        <ul class="list-unstyled three-column">
          <li>Nuestros Servicios</li>
          <li>Cartilla de Proveedores</li>
          <li>Contacto</li>
        </ul>
        <ul class="list-unstyled socila-list">
          <li><img src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png" alt="facebook" width='48px' height='48px'/></li>
          <li><img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" alt="instagram" width='48px' height='48px'/></li>
          <li><img src="https://cdn-icons-png.flaticon.com/128/1384/1384007.png" alt="wsp" width='48px' height='48px'/></li>
          <li><img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="Lin" width='48px' height='48px' /></li>
     
        </ul>
      </div>
      
      <div class="col-lg-4 col-md-6">
        <h3>Los más populares</h3>
        <div class="media">
          <a href="#" class="pull-left">
            <img src="http://placehold.it/64x64" alt="" class="media-object" />
          </a>
          <div class="media-body">
            <h4 class="media-heading">Limpieza de Hogares</h4>
            <p></p>
          </div>
        </div>
        
        <div class="media">
          <a href="#" class="pull-left">
            <img src="http://placehold.it/64x64" alt="" class="media-object" />
          </a>
          <div class="media-body">
            <h4 class="media-heading">Reparaciones</h4>
            <p>Reparación de Techos</p>
            <p>Reparación de Paredes</p>
          </div>
        </div>
        
        <div class="media">
          <a href="#" class="pull-left">
            <img src="http://placehold.it/64x64" alt="" class="media-object" />
          </a>
          <div class="media-body">
            <h4 class="media-heading">Jardinería</h4>
            <p></p>
          </div>
        </div>
        
      </div>
      
      <div class="col-lg-4">
        <h3>Nuestro Trabajo</h3>
        <img class="img-thumbnail" src="https://images.ecestaticos.com/anTxwo5quWg8jF8T0rSe-p7OtEA=/126x8:2002x1412/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F3ab%2F572%2F211%2F3ab572211695c110c2d269223ae9cd17.jpg" alt="Limpieza de hogares" width='150px' height='100px'/>
        <img class="img-thumbnail" src="https://enciclopedia.net/wp-content/uploads/2013/11/jardineria.jpg" alt="jardinería" width='150px' height='100px'/>
        <img class="img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ibW8oaJmNLZOrtiAp4ZIpSP2JwdVRQHcig&usqp=CAU" alt="pintura" width='150px' height='100px'/>
        <img class="img-thumbnail" src="https://www.vaporchile.cl/img/limpieza-de-tapiz-lavado-santiago-chile.jpg" alt="limpieza de sofá" width='150px' height='100px'/>
      </div>
      
    </div>
  </div>
  <div class="copyright text-center">
    Copyright &copy; 2022 <span>E-commerce Services</span>
  </div>
</footer>
    </div>
  )
}


