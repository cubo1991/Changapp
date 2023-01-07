
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Index from '../../Index/Index.jsx';
import s from './SuppliersList.module.css';

export default function SuppliersList () {

  const {user} = useAuth0();
  const userLog = useSelector(state => state.userLog);
  const role = user.user_role || userLog;

  const suppliers = useSelector(state => state.suppliers)

  const [currentPage, setCurrentPage] = useState(1);
  let mySuppliers = [];

  //Confing de paginacion
  const allSuppliers = useSelector(state => state.suppliers);
  const allContracts = useSelector(state => state.contracts);

  useEffect( () => {
    setCurrentPage(1);
  },[suppliers])
  
  const index = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  if(role === "Admin" || role === "SuperAdmin"){
    mySuppliers = allSuppliers
  }else{
    
      const myContracts = allContracts.filter( contract => contract.User.id === parseInt(user.id)); //Busca los contratos que ha hecho el usuario
      mySuppliers = myContracts.map( contract => contract.Supplier); //Busca el id del Supplier de los contratos del usuario
  }

  //Variables de paginacion
  const suppliersPerPage = 5;
  let indexOfLastSupplier = currentPage * suppliersPerPage;
  let indexofFirstSupplier = indexOfLastSupplier - suppliersPerPage;
  const currentSuppliers = mySuppliers.slice(   
    indexofFirstSupplier,
    indexOfLastSupplier
    );
  //paginacion

  return (
    <div>

     {role === "Admin" ||
     role === "SuperAdmin" ? <h2>Listado de proveedores</h2> :
     <h2>Proveedores que han trabajado para ti</h2>}
      <div>

      {mySuppliers.length > 0 ?
        <Index
        servicesPerPage={suppliersPerPage}
        allServices={mySuppliers.length}
        index={index}
        currentPage={currentPage}/>: null}

        {suppliers.length > 0 ? currentSuppliers.map( supplier => {
          return <div className={s.card}>{supplier.name}</div>
        }): <h3>No hay proveedores disponibles</h3>}
      </div>

    </div>
  )

}