import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails} from "../../actions";
import { useAuth0 } from "@auth0/auth0-react";

import style from "../SuppliersDetail/SuppliersDetail.module.css"
import ReviewsForm from '../ReviewsForm/ReviewsForm.jsx'


export const SuppliersDetail = () => {
  let dispatch = useDispatch();
  let supplierDetail = useSelector((state) => state.supplierDetails);
  let params = useParams();
  
  const { isAuthenticated } = useAuth0();
  
  React.useEffect(() => {
    dispatch(getDetails(params.id));
  }, [dispatch, params.id]);

let servs=supplierDetail.Services
console.log(servs)

  return (
    <div className={style.background}>
      {/* <img src="https://img.freepik.com/vector-gratis/fondo-blanco-engranajes-espacio-texto_1017-19420.jpg?w=740&t=st=1670717357~exp=1670717957~hmac=f21d56057b8eb5931d14fd0d376c7116e6c0ee7255c798c2ccc4b61e86ade88c" alt='background'/> */}
      
      <div className={style.card_container}>
      <div class={style.detail_container}>
        <h1>{supplierDetail.name}</h1>
        <h6>Cuit: {supplierDetail.cuit}</h6>
        <p>{supplierDetail.description}</p>
<h4>Servicios prestados</h4>
        {
servs?.map(s=>{

  return (
    
    <div>
           <a className={`btn btn-primary, ${style.botonfiltros}`} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" >
           {s.serviceType}
            </a>
     
            <div className={`offcanvas offcanvas-start, ${style.slideNav}`} tabindex="-1" id="offcanvasExample" >
                <button type="button" className={style.closeButton} data-bs-dismiss="offcanvas" >X</button>
                
               <ul><h4>Reviews</h4>
                  {s.Reviews?.map(r => {
                    return (
                      <div className={style.reviews}>
                        {/*<p>comentario de {r.UserId}</p>*/}
                        <p>rating: {r.rating}</p>
                        <p>{r.comment}</p>
                      </div>
                    )
                  })}
                </ul>  
                </div>
    </div>
  )
})
        } 
        </div>
        
      </div>

      { isAuthenticated ? <ReviewsForm/> : null}
     
      
      
    </div>
  );
};

