import { Suppliers } from "../../Suppliers/Suppliers";
import { useAuth0 } from "@auth0/auth0-react";

export default function SuppliersList () {

  const {user} = useAuth0();

  return (
    <div>
     {user.user_role === "Admin" ||
     user.user_role === "SuperAdmin" ? <h3>Listado de proveedores</h3> :
     <h3>Lista de proveedores contratados</h3>}
      <div>
        <Suppliers></Suppliers>
      </div>
    </div>
  )

}