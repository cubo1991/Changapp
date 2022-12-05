/* export const TEST = "TEST"

export function test(){
    return {
        type: TEST,
        payload: "salio ok"
    }
} */


//import {Servicios} from '../Mockup/Servicios.js';



export function getServices() {
    return  function (dispatch) {
        /* var json =  Servicios
         return dispatch({
            type: 'GET_SERVICES',
            payload: json
        }) */
        //FALTA UN LOADER
        fetch('http://localhost:3001/services')
        .then( res => res.json())
  //      .then( res => console.log(res))
        .then( res => dispatch(addServices(res)))
    }
}

export function addServices(payload){
    return {
        type: 'ADD_SERVICES',
        payload
    }
}