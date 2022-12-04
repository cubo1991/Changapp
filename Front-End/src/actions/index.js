/* export const TEST = "TEST"

export function test(){
    return {
        type: TEST,
        payload: "salio ok"
    }
} */


import {Servicios} from '../Mockup/Servicios.js';



export function getServices() {
    return  function (dispatch) {
        var json =  Servicios
        
        return dispatch({
            type: 'GET_SERVICES',
            payload: json
        })
    }
}