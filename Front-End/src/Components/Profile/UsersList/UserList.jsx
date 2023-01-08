import { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../actions";
import UserCard from "./UserCard/UserCard";
import Index from "../../Index/Index.jsx";
import { Link } from "react-router-dom";


export default function UsersList () {
  
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const [currentPage, setCurrentPage] = useState(1)

  useEffect( () => {
    dispatch(getAllUsers())
  },[dispatch])

  useEffect( () => {
    setCurrentPage(1);
  },[users])

  const index = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  //PAginacion
  //Variables de paginacion
  const usersPerPage = 3;
  let indexOfLastUser = currentPage * usersPerPage;
  let indexofFirstUser = indexOfLastUser - usersPerPage;
  const currentUser = users.slice(   
    indexofFirstUser,
    indexOfLastUser
    );
  //paginacion

  return (
    <div>
      <h3>Lista de Usuarios</h3>

        {users.length > 0 ?
        <Index
        servicesPerPage={usersPerPage}
        allServices={users.length}
        index={index}
        currentPage={currentPage}/>: null}

        {users.length > 0 ? currentUser.map( element => {
          return <Link to={`/profile/user?id=${element.id}`}><UserCard
          id={element.id}
          userName={element.userName} 
          UserRolName={element.UserRol.name}
          picture={element.picture}/></Link>
        }) : null}
    </div>
  )
}