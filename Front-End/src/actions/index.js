/* export const TEST = "TEST"

export function test(){
    return {
        type: TEST,
        payload: "salio ok"
    }
} */


import { GET_DETAILS, GET_SERVICES, GET_SUPPLIERS } from '../Constantes/Constantes.js';
import { Proveedores } from '../Mocks/Proveedores.js';
import {Servicios} from '../Mocks/Servicios.js';



export function getServices() {
    return  function (dispatch) {
        var json =  Servicios
        
        return dispatch({
            type: GET_SERVICES,
            payload: json
        })
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