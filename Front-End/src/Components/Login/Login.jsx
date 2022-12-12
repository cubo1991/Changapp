import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Loading from "../Loading/Loading"
import Style from "../Login/Login.module.css"
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Login() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  /*   const test = useState()
    useEffect(() => {
      console.log(user.name);
    },[test]) */

  if (isLoading) {
    return <div className={Style.isLoading}>Conectando</div>;
  }

  return (
    <>
      {
        isAuthenticated ?
          <>
            <div className={Style.person}>
              <NavLink
                to="/Profile"
              >
                <span><img src={user.picture} alt="" /></span>
              </NavLink>
            </div>
            <div className={Style.person}>
              <button
                className={Style.buttonLogOut}
                onClick={() => logout({ returnTo: window.location.origin })}
              ></button>
            </div>
          </>
          :
          <div className={Style.person}>
            <button
              className={Style.buttonLogin}
              onClick={() => loginWithRedirect()}
            >
              
            </button>
          </div>
      }
    </>
  );
}

