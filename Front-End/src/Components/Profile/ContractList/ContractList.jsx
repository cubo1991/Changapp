import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux"
import { getContracts } from "../../../actions";
import s from './ContractList.module.css';
import { useState } from "react";
import Index from '../../Index/Index.jsx';

export default function ContractList () {

  const dispatch = useDispatch();
  const {user} = useAuth0();

  const allContracts = useSelector(state => state.contracts);
  const [currentPage, setCurrentPage] = useState(1);
  let myContracts;

  useEffect( () => {
    dispatch(getContracts())
  },[dispatch])

  useEffect( () => {
    setCurrentPage(1);
  },[allContracts])

  const index = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  
  if(user.user_role === "Admin" || user.user_role === "SuperAdmin"){
    myContracts = allContracts;
  }else{
    myContracts = allContracts.filter( contract => contract.User.id === user.id)
  }

  //PAginacion
  //Variables de paginacion
  const contractsPerPage = 6;
  let indexOfLastContract = currentPage * contractsPerPage;
  let indexofFirstContract = indexOfLastContract - contractsPerPage;
  const currentContracts = myContracts.slice(   
    indexofFirstContract,
    indexOfLastContract
    );
  //paginacion

  console.log(allContracts)

  return(
    <div>
      {user.user_role === "Admin" || user.user_role === "SuperAdmin" ? 
      <h3>Lista de contratos</h3>: 
      <h3>Lista de contratos realizados</h3>}

        {myContracts.length > 0 ? <Index
        servicesPerPage={contractsPerPage}
        allServices={myContracts.length}
        index={index}
        currentPage={currentPage}/>: null}

      <div className={s.container}>

        {myContracts.length > 0 ? currentContracts.map( contract => {
          return <div className={s.card}>
            <div>
              <b>Id Contrato: </b><span>{contract.id}</span>
            </div>
            <div>
              <b>Proveedor: </b><span>{contract.Supplier.name}</span>
            </div>
            <div>
              <b>Cliente: </b><span>{contract.User.userName}</span>
            </div>  
            <div>
              <b>Fecha de creación: </b><span>{contract.date}</span>
            </div>
          </div> 
        }) : <div>
                <br/>
                <h4>No has realizado ningún pedido</h4>
              </div>  
                }

      </div>
    </div>
  )
}