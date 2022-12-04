//import {} from "../actions/index"

import { GET_DETAILS, GET_SERVICES, GET_SUPPLIERS } from "../Constantes/Constantes";

const initialState = {
  services: [],
  suppliers:[],
  supplierDetails:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:   
      return {
        ...state,
        services: action.payload,
      }

      case GET_SUPPLIERS:
        return {
          ...state,
         suppliers: action.payload

        } 
      case GET_DETAILS:
        return {
          ...state,
          supplierDetails: action.payload
        }
    default:
      return state;
  }
};

export default reducer;
