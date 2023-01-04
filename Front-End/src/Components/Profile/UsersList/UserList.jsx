import { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../actions";
import UserCard from "./UserCard/UserCard";


export default function UsersList () {
  
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useEffect( () => {
    dispatch(getAllUsers())
  },[dispatch])

  return (
    <div>
      <h3>Lista de Usuarios</h3>
        {users.length > 0 ? users.map( element => {
          return <UserCard
          id={element.id}
          userName={element.userName} 
          UserRolName={element.UserRolName}
          picture={element.picture}/>
        }) : null}
    </div>
  )
}