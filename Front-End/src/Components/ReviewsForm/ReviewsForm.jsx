
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import s from '../ReviewsForm/ReviewsForm.module.css';
import { sendReview } from '../../actions';
import { useParams } from 'react-router-dom';

export default function ReviewsPost () {
  
  
  const dispatch = useDispatch()

  console.log("**** INIT *****")
  
  const supplierId = useParams()
  console.log(supplierId.id, "PARAMS")
  
  const [inputValues, setInputValues] = useState({
    rating: 1,
    comment: "",
    supplierId: supplierId.id,
    //MOdificar antes de desplegar
    userId: "40ce5b6b-7812-401c-9b98-132f89660714"
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

  return (

    <form className={s.container}>
      <h3 className={s.title}>Puntuación</h3>
      
      <div className={s.rating}>
        
        <input name="rating" value={inputValues.rating} 
        type="range" 
        min="1" max="5"
        onChange={(e) => inputHandlers(e)}/>

        <div className={s.numeric}>
          <label>1</label><label>2</label><label>3</label><label>4</label><label>5</label>
        </div>

      </div>

      <h4>Comentario</h4>
      <textarea rows="2" className={s.textArea} placeholder='Deja tu comentario aqui...' 
      name="comment" value={inputValues.comment} onChange={(e) => {
        inputHandlers(e);
      }} maxLength="256"/>

      <input className={s.submit}
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
       }}/>
    </form>
  )

}