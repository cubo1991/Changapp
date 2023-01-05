import s from './UserCard.module.css';

export default function UserCard({id, userName, UserRolName, picture}){

  return (
    <div className={s.container}>
      <div>
        <h4>Id: {id}</h4>
        <b>userName: </b><span>{userName}</span> <br/>
        <b>Rol: </b><span>{UserRolName}</span>  <br/>
      </div>
      <img src={picture} alt="user" />
      {/* Esto va para el detalle del user */}
      {/* <b>Edad: </b><span>{age}</span>
      <b>Nombre: </b><span>{name}</span>
      <b>Nickname: </b><span>{nickname}</span>
      <b>given_name: </b><span>{given_name}</span>
      <b>Apellidos: </b><span>{family_name}</span>
      <b>Email: </b><span>{email}</span>
      <b>Email verificado: </b><span>{email_verified}</span> */}

    </div>
  )
}