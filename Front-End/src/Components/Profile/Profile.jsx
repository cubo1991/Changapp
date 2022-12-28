import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import s from "./Profile.module.css";
import { getUserById, updateImageProfile } from "../../actions";
import { useEffect } from "react";


export default function Profile() {
  const { user } = useAuth0();

  const dispatch = useDispatch();
  const userDB = useSelector(state => state.userDB)

 const userAuthId = user.id.split('|');
 const userId = parseInt(userAuthId[1]);
 const [flag, setFlag]  = useState(false);
 
useEffect(() => {
    dispatch(getUserById(userId));
},[dispatch, userDB.picture])



const onClick = (e) => {
  setFlag(flag?false:true)
  console.log(flag)
};


const onSubmit = (e) => {
  e.preventDefault();
  const imageForm = document.getElementById('images');
  const formData = new FormData(imageForm)
  dispatch(updateImageProfile(userId,formData))
  setFlag(false);
}
  return (
    <div className={s.container}>
      {console.log(userDB)}

      <h1>Bienvenido {user.name}</h1>
      <br />
     
      {userAuthId[0] === 'auth0'?
      <div>
        <img src={userDB.picture} alt="profile image" />
      <input className={s.button} type='button' onClick={(e) => onClick(e)}/>
      </div>
      :
      <img src={user.picture} alt="" />
    }
      {userAuthId[0] === 'auth0' && flag ? 
    <div className={s.container1}>
      <form onSubmit={(e) => onSubmit(e)} class="row g-6" enctype="multipart/form-data" id='images' >
      <input class="form-control form-control-sm" id="formFileSm" type="file" name='image'/>
      <input type='submit' value='update'/>
      </form>
    </div>  
    : null
    }
      
      <div>
        <h1>Te logueaste con exito </h1>
        <strong>En este sitio sos {user.user_role}</strong>
        <div>Mi carrito</div>
        <button>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? s.active : s.inactive)}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className={s.cart}
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </div>
          </NavLink>
        </button>
      </div>
    </div>
  );
}
