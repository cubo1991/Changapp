import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import Style from "../NavBar/Navbar.module.css";

import React, { useState, useEffect } from "react";




export default function NavBarSupplier(){
const { user, isLoading, isAuthenticated } = useAuth0();
const [userRole, setUserRole] = useState("User");

useEffect(() => {
    if (!isLoading && isAuthenticated && user.user_role) setUserRole(user.user_role);
}, [isLoading, isAuthenticated, user]);



    return (
        <ProtectedRoute>
            {
                userRole === "Supplier" ?
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? Style.active : Style.inactive
                        }
                        to="/suppliersContact"
                    >

                        <div className={`${Style.link} nav-link`}>
                            <span>Publicá tu servicio</span>
                        </div>

                    </NavLink>
                    : ""
            }
        </ProtectedRoute>
    )
}
