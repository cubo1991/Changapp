import React from "react";
import style from "./ServiceDetailCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../actions";

export const ServiceDetailCard = ({ name, pph, description, category, suppliers, img, id }) => {
    
  let dispatch = useDispatch()
  let cart = useSelector((state) => state.cart)

    const onClickBtn =() => {
     let verifier =(e) => e.id === id
     if(cart.some(verifier)) return;
     dispatch(addCart(id))
    } 

  return (
    <div className={style.container}>

      <div className={style.container1}>
      <h2 className={style.name}>{name}</h2>
      <div className={style.container3}>
      <div className={style.container2}>
          <img className={style.img} src={img} alt="Imagen"/>
          <button className={style.button} onClick={onClickBtn}>Agregar al Carrito</button>
        </div>
        <div className={style.detail_container}>
          
          <h4>Costo por hora</h4> <p>${pph}</p>
          <h4>Descripción</h4>
          <p>{description}</p>
          <h4>Proveedores</h4>
        {suppliers.map(s => {
  return (
  <p>{s.name}</p>
  )
        })}
        </div>

      </div>

      </div>
    
      </div>

  );
};
