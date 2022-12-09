import React from "react";
import style from "./ServiceDetailCard.module.css";

export const ServiceDetailCard = ({ name, pph, description, category, suppliers, img }) => {



  return (
    <div className={style.container}>
      <div className={style.detail_container}>
        <h2 className={style.name}>{name}</h2>
        <h4>Costo por hora</h4> <p>{pph}$</p>
        <h4>Descripción</h4>
        <p>{description}</p>
        <h4>Proveedor</h4>
        <p>{suppliers[0].name}</p>

        <img className="img-fluid w-50" style={{height: "50%", padding:"2rem"}} src={img} alt="Imagen"/>
      </div>
      <button className="btn btn-dark"> Click me</button>


    </div>
  );
};
