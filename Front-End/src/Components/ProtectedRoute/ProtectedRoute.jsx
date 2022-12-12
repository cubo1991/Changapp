import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Loading />;

  if (isAuthenticated) return children;

  return <Navigate to="/" />;
};
