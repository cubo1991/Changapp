/* export const TEST = "TEST"

export function test(){
    return {
        type: TEST,
        payload: "salio ok"
    }
} */

import { json } from "react-router-dom"
import { GET_DETAILS } from "../Constantes/Constantes"


//import {Servicios} from '../Mockup/Servicios.js';

export function getCategories() {
    return function (dispatch) {

        fetch('http://localhost:3001/category')
            .then(res => res.json())
            .then(res => dispatch({ type: "GET_CATEGORIES", payload: res }))
    }
}
export function filterByCategory(categoryId) {
    return function (dispatch) {

        fetch(`http://localhost:3001/services?by=category&category=${categoryId}`)
            .then(res => res.json())
            .then(res => dispatch({ type: "FILTER_BY_CATEGORY", payload: res }))
    }
}
export function filterByLocation(location) {
    return function (dispatch) {

        fetch(`http://localhost:3000/services?by=location&location=${location}`)
            .then(res => res.json())
            .then(res => dispatch({ type: "FILTER_BY_LOCATION", payload: res }))
    }
}

export function getServices() {
    return function (dispatch) {
        /* var json =  Servicios
         return dispatch({
            type: 'GET_SERVICES',
            payload: json
        }) */
        //FALTA UN LOADER
        fetch('http://localhost:3001/services')
            .then(res => res.json())
            .then(res => dispatch(addServices(res)))
    }
}

export function addServices(payload) {
    return {
        type: 'ADD_SERVICES',
        payload
    }
}

export function searchService(data) {
    return function (dispatch) {
        fetch(`http://localhost:3001/services?type=${data}`)
            .then(res => res.json())
            .then(res => dispatch(addServices(res)))
        dispatch(searchingTrue());
    }
}

export function searchingTrue() {
    return {
        type: 'SEARCHING_TRUE'
    }
}

export function searchingFalse() {
    return {
        type: 'SEARCHING_FALSE'
    }
}

export function fillSuppliers(payload) {
    return {
        type: 'FILL_SUPPLIERS',
        payload
    }
}

export function getSuppliers() {
    return function (dispatch) {
        fetch('http://localhost:3001/suppliers')
            .then(res => res.json())
            .then(res => dispatch(fillSuppliers(res)))
    }
}

export function searchSuppliers(data) {
    return function (dispatch) {
        fetch(`http://localhost:3001/suppliers?name=${data}`)
            .then(res => res.json())
            .then(res => dispatch(fillSuppliers(res)))
        dispatch(searchingTrue());
    }
}

export function searchingServices() {
    return {
        type: 'SEARCHING_SERVICES'
    }
}

export function searchingSuppliers() {
    return {
        type: 'SEARCHING_SUPPLIERS'
    }
}




export const getDetails = (id) => {
    let found;
    return function (dispatch) {
        fetch('http://localhost:3001/suppliers')
            .then(res => res.json())
            .then(res => found = res.find(e => e.id === (id)))
            .then(res => {
                console.log(res)
                dispatch({
                    type: GET_DETAILS,
                    payload: found
                })

            })



    }
}