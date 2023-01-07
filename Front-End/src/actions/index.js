/* export const TEST = "TEST"

export function test(){
    return {
        type: TEST,
        payload: "salio ok"
    }
} */

import { ADD_CART, GET_DETAILS, REMOVE_ITEM, SHOW_CART } from "../Constantes/Constantes"
import axios from 'axios';

const BACKEND_SERVER =
  process.env.REACT_APP_BACKEND_SERVER || "http://localhost:3001";

//import {Servicios} from '../Mockup/Servicios.js';

export function setServices(payload) {
  return {
    type: "SET_SERVICES",
    payload,
  };
}

export function init() {
  return function (dispatch) {
    fetch(BACKEND_SERVER + "/services")
      .then((res) => res.json())
      .then((res) => {
        dispatch(setServices(res));
        dispatch(addServices(res));
      });
  };
}

export function getCategories() {
  return function (dispatch) {
    fetch(BACKEND_SERVER + "/category")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "GET_CATEGORIES", payload: res }));
  };
}

export function getLocations() {
  return function (dispatch) {
    fetch(BACKEND_SERVER + "/location")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "GET_LOCATIONS", payload: res }));
    /* .then( res => {
            console.log(res, "LOCATION")
           // dispatch({type: "GET_LOCATIONS", payload:})
            
        }) */
  };
}
export function filterByCategory(categoryId) {
  return function (dispatch) {
    fetch(`${BACKEND_SERVER}/services?by=category&category=${categoryId}`)
      .then((res) => res.json())
      .then((res) => dispatch({ type: "FILTER_BY_CATEGORY", payload: res }));
  };
}
export function filterByLocation(location) {
  return function (dispatch) {
    fetch(`${BACKEND_SERVER}/services?by=location&location=${location}`)
      .then((res) => res.json())
      //      .then(res => console.log(res, "REPUESTA"))
      .then((res) => dispatch({ type: "FILTER_BY_LOCATION", payload: res }));
  };
}

export function getServices() {
  return function (dispatch) {
    /* var json =  Servicios
         return dispatch({
            type: 'GET_SERVICES',
            payload: json
        }) */
    //FALTA UN LOADER
    fetch(BACKEND_SERVER + "/services")
      .then((res) => res.json())
      .then((res) => dispatch(addServices(res)));
  };
}

export function addServices(payload) {
  return {
    type: "ADD_SERVICES",
    payload,
  };
}

export function searchService(data) {
  return function (dispatch) {
    fetch(`${BACKEND_SERVER}/services?type=${data}`)
      .then((res) => res.json())
      .then((res) => dispatch(addServices(res)));
    dispatch(searchingTrue());
  };
}

export function searchingTrue() {
  return {
    type: "SEARCHING_TRUE",
  };
}

export function searchingFalse() {
  return {
    type: "SEARCHING_FALSE",
  };
}

export function fillSuppliers(payload) {
  return {
    type: "FILL_SUPPLIERS",
    payload,
  };
}

export function getSuppliers() {
  return function (dispatch) {
    fetch(BACKEND_SERVER + "/suppliers")
      .then((res) => res.json())
      .then((res) => dispatch(fillSuppliers(res)));
  };
}

export function searchSuppliers(data) {
  return function (dispatch) {
    data = data.toLowerCase().split("");
    const letter = data.shift()
    data = [letter.toUpperCase(), ...data].join("");
    
    fetch(`${BACKEND_SERVER}/suppliers?name=${data}`)
      .then((res) => res.json())
      .then((res) => dispatch(fillSuppliers(res)));
    dispatch(searchingTrue());
  };
}

export function searchingServices() {
  return {
    type: "SEARCHING_SERVICES",
  };
}

export function searchingSuppliers() {
  return {
    type: "SEARCHING_SUPPLIERS",
  };
}

export const getDetails = (id) => {
  //let found;
  return function (dispatch) {
    fetch(BACKEND_SERVER + `/suppliers/${id}`)
      .then((res) => res.json())
      //.then((res) => (found = res.find((e) => e.id === id)))
      .then((res) => {
        console.log(res);
        dispatch({
          type: GET_DETAILS,
          payload: res,
        });
      });
  };
};

export const addCart = (id) => {
  let found;
  return function (dispatch) {
    fetch(BACKEND_SERVER + "/services")
      .then((res) => res.json())
      .then((res) => (found = res.find((e) => e.id === id)))
      .then((res) => {
        dispatch({
          type: ADD_CART,
          payload: found,
        });
      });
  };
};

export function orderByPrices(data, filter) {
  return function (dispatch) {
    fetch(`${BACKEND_SERVER}/services?order=${data}&filter=${filter}`)
      .then((res) => res.json())
      .then((res) => dispatch(addServices(res)));
  };
}

export function getServiceDetails(data) {
  return function (dispatch) {
    fetch(`${BACKEND_SERVER}/services/${data}`)
      .then((res) => res.json())
      .then((res) => dispatch({ type: "SERVICE_DETAIL", payload: res }));
  };
}

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};

export const showCart = (payload) => {
  return {
    type: SHOW_CART,
    payload,
  };
};

export const postSupplier = (data) => {

  return function () {
    axios
      .post(BACKEND_SERVER + "/suppliers", data)
      .catch((error) => {
        console.log(error);
        alert("Something went wrong...");
      });
  };
};

export function sendReview(data) {
  return function (dispatch) {
    fetch(BACKEND_SERVER + "/review", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((res) => alert(res))
    //mensaje de exito
  };
};

export function getUserById(id) {
  return function (dispatch) {
    fetch(`${BACKEND_SERVER}/users/${id}`)
      .then((res) => res.json())
      .then((res) => dispatch({ type: 'USER_BY_ID', payload: res }));
  };
};

export function updateImageProfile(id, payload) {
  return function (dispatch) {
    axios.post(`${BACKEND_SERVER}/users/${id}/updateImage/`,payload)
      .then((res) => dispatch({ type: "UPLOAD_IMAGE_PROFILE", payload: res }));
  };
};

export function sendContractNotification(status, email) {
  return function(dispatch){
    fetch(`${BACKEND_SERVER}/notifications?success=${status}&email=${email}`)
    .then( res => res.json())
    .then( res => console.log(res))
  }
}

export function getAllUsers(){
  return function(dispatch){
    fetch(`${BACKEND_SERVER}/userHandler`)
    .then( res => res.json())
    .then( res => dispatch({type: "GET_ALL_USERS", payload: res}))
  }
}

export const postServices = (imageForm, input) => {
  return function () {
    axios
      .post(BACKEND_SERVER + "/services", {imageForm, input})
      .catch((error) => {
        console.log(error);
        alert("Something went wrong...");
      });
  };
};

export function getContracts () {
  return function (dispatch){
    fetch(`${BACKEND_SERVER}/contracts`)
    .then( res => res.json())
    .then( res => dispatch({type: "GET_ALL_CONTRACTS", payload: res}));
  }
}

export function getUserDetails (id, profile) {
  return function (dispatch) {
    fetch(`${BACKEND_SERVER}/userHandler?id=${id}`)
    .then( res => res.json())
    .then( res => {
      if(!profile) return dispatch({type: "GET_USER_BY_ID", payload: res});
      else dispatch({type: "GET_USER_LOG", payload: res[0].UserRol.name});
    })
  }
}

export function updateUser(data){
  return function (){
    fetch(`${BACKEND_SERVER}/userHandler`, {
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify(data)
    })
  }
}

export function deleteUser(data){
  return function (){
    fetch(`${BACKEND_SERVER}/userHandler`,{
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE",
      body: JSON.stringify(data)
    })
  }
}

export function addCategory(data){
  return function(){
    fetch(`${BACKEND_SERVER}/category`,{
      mode: 'cors',
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }
}
