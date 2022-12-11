
import { useState } from 'react';
import s from '../ReviewsForm/ReviewsForm.module.css';

export default function ReviewsPost () {

  const [inputValues, setInputValues] = useState({
    rating: 1,
    comment: ""
  })

console.log(inputValues)

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

      <input className={s.submit}
        type="submit" value="Enviar" onClick={(e) => {
        e.preventDefault();
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