import React from "react";
import style from "./ServiceDetailCard.module.css";

export const ServiceDetailCard = ({ name, pph, description, category, suppliers }) => {

  console.log(suppliers)

  return (
    <div className={style.container}>
      <div class={style.detail_container}>
        <h2>{name}</h2>
        <h4>Costo por hora</h4> <p>{pph}$</p>
        <h4>Descripción</h4>
        <p>{description}</p>
        <h4>Proveedor</h4>
        <p>{suppliers[0].name}</p>
        <button class="btn btn-dark"> Click me</button>
      </div>
    </div>
  );
};
