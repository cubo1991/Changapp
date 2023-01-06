import React,{useState} from 'react';
import style from '../Banner/banner.module.css';

export default function Banner () {

    const [flag, setFlag] = useState(false);
    const [slide, setSlide] = useState({
        image1: 'https://marketingblanco.com/imagenes/los-mejores-consejos-de-marketing-para-empresas-de-servicios-para-el-hogar.jpg',
        title1: 'Encontrá el servicio que estás buscando',
        image2: 'https://mattushop.com.ar/wp-content/uploads/2015/03/bannerMercadoPago.jpg',
        title2: '.',
        image3: 'https://png.pngtree.com/thumb_back/fh260/background/20220523/pngtree-cleaning-service-flat-background-with-group-of-young-women-in-uniform-image_1391520.jpg',
        title3: '10% OFF en todos los servicios de Limpieza'
    })

   /* const onClick = (e) => {
        setFlag(flag?false:true)
        console.log(flag)
      }*/

    const onChange = (e) => {
        setSlide({
            ...slide,
            [e.target.name]:e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        //const imageForm = document.getElementById('images');
        //const formData = new FormData(imageForm)
//dispatch(action(formData));
        setFlag(false);
    }

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
    {/*<input className={style.button} type='button' onClick={(e) => onClick(e)}/>*/}
      <img src={slide.image1} className="d-block w-100" style={{height:"15rem"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className={style.title}>{slide.title1}</h1>
        {flag? <form onSubmit={e=>onSubmit(e)} enctype="multipart/form-data" id='image1'>
        <input id="formFileSm" type="file" name='image1'/>
            <input type='text' name='title1' value={slide.title1} onChange={e=>onChange(e)} />
          <input type='submit' value='update'/>
        </form> : null}
      </div>
    </div>
    
      
    <div className="carousel-item">
    {/*<input className={style.button} type='button' onClick={(e) => onClick(e)}/>*/}
      <img src={slide.image2} className="d-block w-100" style={{height:"15rem"}} alt="..."/>
      <h1 className={style.title}>{slide.title2}</h1>
      <div className="carousel-caption d-none d-md-block">
      {flag? <form onSubmit={e=>onSubmit(e)} enctype="multipart/form-data" id='image2'>
        <input id="formFileSm" type="file" name='image2'/>
            <input type='text' name='title2' value={slide.title2} onChange={e=>onChange(e)} />
          <input type='submit' value='update'/>
        </form> : null}
      </div>
    </div>
    
    
    <div className="carousel-item">
    {/*<input className={style.button} type='button' onClick={(e) => onClick(e)}/>*/}
      <img src={slide.image3} className="d-block w-100" style={{height:"15rem"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className={style.title}>{slide.title3}</h1>
        {flag? <form onSubmit={e=>onSubmit(e)} enctype="multipart/form-data" id='image3'>
        <input id="formFileSm" type="file" name='image3'/>
            <input type='text' name='title3' value={slide.title3} onChange={e=>onChange(e)} />
          <input type='submit' value='update'/>
        </form> : null}
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

<div className={style.container}>
      
            </div> 

        </div>
    )
}