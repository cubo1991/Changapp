import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Loading from "../Loading/Loading";
import Login from "../Login/Login"

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Loading />;

  if (isAuthenticated) return children;


  return <div>
    <br />
    <br />
    <br />
    <br />

    <div  role="alert">
      <p>Primero debes loguearte</p>

      <div>
    <button style={{"background-color":"black", "border-radius":"50%"}}>

      <Login/>

    </button>
  </div>
      </div>
      <br />
    <br />
    <br />
    <br />
  </div>
};
