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
      <div className={style.detail_container}>
        <h2 className={style.name}>{name}</h2>
        <h4>Costo por hora</h4> <p>${pph}</p>
        <h4>Descripción</h4>
        <p>{description}</p>
        <h4>Proveedores</h4>
        {suppliers.map(s => {
  return (
  <p>{s.name}</p>
  )
        })}
        
        
       

        <img className="img-fluid w-50" style={{height: "50%", padding:"2rem"}} src={img} alt="Imagen"/>
      </div>
      <button className='btn btn-primary' onClick={onClickBtn}>Agregar al Carrito</button>


    </div>
  );
};
