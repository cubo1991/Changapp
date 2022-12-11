import React from "react";
import style from "../SuppliersDetail/SuppliersDetailCard.module.css";
import ReviewsForm from '../ReviewsForm/ReviewsForm.jsx'

export const SuppliersDetailCard = ({ name, id, cuit, description }) => {
  const setImg = (name) => {
    console.log(name);
    switch (name) {
      case "Techos S.A.":
        return "https://sites.google.com/site/tecnologiadelaconstruccionumes/_/rsrc/1465433861579/techos/lamina-tipo-teja-onduvilla-premium-30-anos-de-vida-util-15292-MLM20098522595_052014-F.jpg";
      case "Paredes S.A.":
        return "https://i.pinimg.com/736x/2c/c4/5b/2cc45b7f9ea9bfc328dea0a866653917.jpg";
      case "Limpieza S.A.":
        return "https://ppldivision.com.ar/wp-content/uploads/2018/09/Limpieza-integral.jpg";
      case "Cloacas S.A.":
        return "https://img2.rtve.es/i/?w=1200&i=https://img2.rtve.es/imagenes/memoria-delfin-cloacas-5000-kilometros-ciudad-paralela-01-12-18/1543591280515.jpg";
      default:
        return "https://ichef.bbci.co.uk/news/640/cpsprodpb/5D5B/production/_99199832_edificios.jpg";
    }
  };

  return (
    <div>
      <div className={style.container}>
        <img src={setImg(name)} class={`${style.img}`} alt={name} />
        <div class={style.detail_container}>
          <h2>{name}</h2>
          <h4>Cuit</h4> <p>{cuit}</p>
          <h4>Description</h4>
          <p>{description}</p>
          <button class="btn btn-dark"> Click me</button>
        </div>
      </div>
      <ReviewsForm/>
    </div>
  );
};
