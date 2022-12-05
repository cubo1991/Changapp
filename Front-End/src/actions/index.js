/* export const TEST = "TEST"

export function test(){
    return {
        type: TEST,
        payload: "salio ok"
    }
} */


<<<<<<< HEAD
import { GET_DETAILS, GET_SERVICES, GET_SUPPLIERS } from '../Constantes/Constantes.js';
import { Proveedores } from '../Mocks/Proveedores.js';
import {Servicios} from '../Mocks/Servicios.js';
=======
//import {Servicios} from '../Mockup/Servicios.js';
>>>>>>> 837b15487b00e44fa1abfd11991e4690315e640c



export function getServices() {
    return  function (dispatch) {
<<<<<<< HEAD
        var json =  Servicios
        
        return dispatch({
            type: GET_SERVICES,
=======
        /* var json =  Servicios
         return dispatch({
            type: 'GET_SERVICES',
>>>>>>> 837b15487b00e44fa1abfd11991e4690315e640c
            payload: json
        }) */
        //FALTA UN LOADER
        fetch('http://localhost:3001/services')
        .then( res => res.json())
        .then( res => dispatch(addServices(res)))
    }
}

export function addServices(payload){
    return {
        type: 'ADD_SERVICES',
        payload
    }
}

export function searchService(data){
    return function(dispatch){
        fetch(`http://localhost:3001/services?type=${data}`)
        .then(res => res.json())
        .then(res => dispatch(addServices(res)))
        dispatch(searchingTrue());
    }
}

export function searchingTrue(){
    return {
        type: 'SEARCHING_TRUE'
    }
}

export function searchingFalse(){
    return {
        type: 'SEARCHING_FALSE'
    }
}

export function fillSuppliers(payload){
    return {
        type: 'FILL_SUPPLIERS',
        payload
    }
}

export function getSuppliers(){
    return function(dispatch){
        fetch('http://localhost:3001/suppliers')
        .then(res => res.json())
        .then(res => dispatch(fillSuppliers(res)))
    }
}

export function searchSuppliers(data){
    return function(dispatch){
        fetch(`http://localhost:3001/suppliers?name=${data}`)
        .then(res => res.json())
        .then(res => dispatch(fillSuppliers(res)))
        dispatch(searchingTrue());
    }
}

export function searchingServices(){
    return {
        type: 'SEARCHING_SERVICES'
    }
}

export function searchingSuppliers(){
    return {
        type: 'SEARCHING_SUPPLIERS'
    }
}


export const getSuppliers= () => {

    return function(dispatch){
        let json = Proveedores

        return dispatch({
            type: GET_SUPPLIERS,
            payload:json
        })
    }
}

export const getDetails = (id) => {
return function (dispatch){
const found = Proveedores.find(e => e.id === Number(id))

return dispatch({
    type: GET_DETAILS,
    payload: found
})
}
}