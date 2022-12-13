
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import s from '../ReviewsForm/ReviewsForm.module.css';
import { sendReview } from '../../actions';
import { useParams } from 'react-router-dom';

export default function ReviewsPost () {

  const supplierDetails = useSelector(state => state.supplierDetails)
  const servs = supplierDetails.Services
  
  console.log(servs);
  
  const dispatch = useDispatch()
  
  const supplierId = useParams()
  console.log(supplierId.id, "PARAMS")
  
  const [inputValues, setInputValues] = useState({
    rating: 1,
    comment: "",
    serviceId: supplierId.id,
    //Aun hardcodeado
    userId: 2,
    serviceType: ""
  })
  
  console.log(inputValues)
  console.log(supplierId)

  const inputHandlers = (e) => {
    setInputValues( prev => {
      return {
        ...prev,
        [e.target.name]: e.target.name === "comment" ? e.target.value : parseInt(e.target.value)
      }
    })
  }

  const selectHandler = (e) => {
    if(e.target.value === "default"){
      setInputValues( prev => {
        return {
          ...prev,
          serviceType: ""
        }
      })
    }else {
      setInputValues( prev => {
        return {
          ...prev,
          serviceType: e.target.value
        }
      })
    }
  }

  return (

    <form className={s.container}>

   
        <div className={s.services}>

            <h5>Servicio</h5>
            <select onChange={(e) => selectHandler(e)}>

            <option value='default'>-- Seleccione el servicio... --</option>

            {servs ? servs.map( element => {
              
              return <option value={element.serviceType}>{element.serviceType}</option>

            }) : null}

            </select>
        </div>
    

      <h5 className={s.title}>Puntuación</h5>
      
      <div className={s.rating}>
        
        <input name="rating" value={inputValues.rating} 
        type="range" 
        min="1" max="5"
        onChange={(e) => inputHandlers(e)}/>

        <div className={s.numeric}>
          <label>1</label><label>2</label><label>3</label><label>4</label><label>5</label>
        </div>

      </div>
<div className={s.column}>
      <h6>Comentario</h6>
      <textarea rows="3" cols='80' className={s.textArea} placeholder='Deja tu comentario aqui...' name="comment" value={inputValues.comment} onChange={(e) => {
        inputHandlers(e);
      }} maxLength="256"/>

      <input className={s.submit} disabled={inputValues.serviceType === "" ? true : false}
        type="submit" value="Enviar" onClick={(e) => {
        e.preventDefault();
        dispatch(sendReview(inputValues))
        setInputValues(prev => {
          return {
            ...prev,
            rating: 1,
            comment: ""
          }
        })
       }}/></div>
    </form>
  )

}