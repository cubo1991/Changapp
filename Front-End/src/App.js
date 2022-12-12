import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
//styles
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
//components
import Home from "./Components/Home/Home.jsx";
import NavBar from "./Components/NavBar/NavBar.jsx";
import { Suppliers } from "./Components/Suppliers/Suppliers.jsx";
import { Contact } from "./Components/Contact/Contact.jsx";
import { Cart } from "./Components/Cart/Cart.jsx";
import Profile from "./Components/Profile/Profile";

import { SuppliersDetail } from "./Components/SuppliersDetail/SuppliersDetail";
import { useDispatch } from "react-redux";
import { init, showCart } from "../src/actions/index.js";
import { ServicesDetail } from "./Components/ServicesDetail/ServicesDetail";
import { FormSuppliers } from "./Components/FormSuppliers/FormSuppliers";
import { Footer } from "./Components/Footer/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const allKeys = Object.keys(localStorage);
    const localStorageMap = allKeys.map((key) =>
      JSON.parse(localStorage.getItem(key))
    );

    dispatch(showCart(localStorageMap));
    dispatch(init());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/suppliers/:id" element={<SuppliersDetail />} />
        <Route path="/suppliersContact" element={<FormSuppliers />} />
        <Route path="/services/:d" element={<ServicesDetail />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
