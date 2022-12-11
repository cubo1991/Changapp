import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Loading from "../Loading/Loading";
import s from "./Profile.module.css";

export default function Profile() {
    const { user, isAuthenticated } = useAuth0();


    return (
        <>
        {
            isAuthenticated ?
            
        <div className={s.container}>
        


            {console.log(user)}

            <h1>Bienvenido {user.name}</h1><br />
            <img src={user.picture} alt="" />

            <div >
                <h1>Te logueaste con exito </h1>
            </div>
        </div>
        :
        <h1>hubo un error</h1>
    } 
    </>
    )
}