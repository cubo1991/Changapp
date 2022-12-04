import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
//components
import  Home  from './Components/Home/Home.jsx'
import NavBar from "./Components/NavBar/NavBar.jsx";
import { Suppliers } from "./Components/Suppliers/Suppliers.jsx";
import { Contact } from "./Components/Contact/Contact.jsx";
import { Cart } from "./Components/Cart/Cart.jsx";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="suppliers" element={<Suppliers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Navigate replace to="/" />} />
     </Route>
           </Routes>
    </div>
  );
}

export default App;