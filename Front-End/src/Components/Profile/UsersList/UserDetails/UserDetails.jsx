import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate} from "react-router-dom";
import { getUserDetails } from "../../../../actions";
import s from "./UserDetails.module.css";

export default function UserDetails () {

  const dispatch = useDispatch();

  const location = useLocation();
  const query = location.search.split("=")

  const navigate = useNavigate();
  
  const details = useSelector(state => state.userDetails)

  useEffect( () => {
    console.log()
    dispatch(getUserDetails(query[1]))
  },[dispatch]);

  return (
    <>
    {details.length > 0 ? <div className={s.container}>
      <div className={s.buttons}>
        <button className={s.returnButton} onClick={() => navigate(-1)}>Regresar</button>
        <div className={s.options}>
          <button className={s.optionsButton}>Editar</button>
          <button className={s.optionsButton}>Eliminar</button>
        </div>
      </div>
      <div className={s.card}>
        <div className={s.data}>
          <div className={s.item}>
            <b>Id: </b><input type="text" value={details[0].id} disabled="true"></input>
          </div>
          <div className={s.item}>
            <b>Rol: </b><input type="text" value ={details[0].UserRolName} disabled></input>
          </div>
          <div className={s.item}>
            <b>UserName: </b><input type="text" value ={details[0].userName} disabled></input>
          </div>
          <div className={s.item}>
            <b>Nombre: </b><input type="text" value ={details[0].name} disabled></input>
          </div>
          <div className={s.item}>
            <b>Edad: </b><input type="text" value ={details[0].age} disabled></input>
          </div>
          <div className={s.item}>
            <b>Email: </b><input type="text" value ={details[0].email} disabled></input>
          </div>
          <div className={s.item}>
            <b>Email Verificado: </b><span>{details[0].email_verified ? "Si" : "No"}</span>
          </div>
          <div className={s.item}>
            <b>Dirección: </b><input type="text" value={details[0].Detail.adress} disabled></input>
          </div>
          <div className={s.item}>
            <b>Provincia: </b><input type="text" value ={details[0].Detail.location} disabled></input>
          </div>
          <div className={s.item}>
            <b>Teléfono: </b><input type="text" value ={details[0].Detail.phoneNumber} disabled></input>
          </div>
        </div>
        <div className={s.picture}>
          <img src={details[0].picture} alt="" />
        </div>
      </div>
    </div>: "PONER UN LOADING"}
    </>
  )
}