//import {} from "../actions/index"

import { GET_DETAILS, GET_SERVICES, GET_SUPPLIERS } from "../Constantes/Constantes";

const initialState = {
  services: [],
<<<<<<< HEAD
  suppliers:[],
  supplierDetails:[]
=======
  searchingType: "",
  searching: false,
  suppliers: []
>>>>>>> 837b15487b00e44fa1abfd11991e4690315e640c
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
<<<<<<< HEAD
    case GET_SERVICES:   
=======

      case 'ADD_SERVICES':
>>>>>>> 837b15487b00e44fa1abfd11991e4690315e640c
      return {
        ...state,
        services: action.payload,
      }

<<<<<<< HEAD
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
=======
      case 'SEARCHING_TRUE':
        return {
          ...state,
          searching: true
        }

      case 'SEARCHING_FALSE':
        return {
          ...state,
          searching: false
        }  

      case 'FILL_SUPPLIERS':
        return {
          ...state,
          suppliers: action.payload
        }
        
      case 'SEARCHING_SERVICES':
        return {
          ...state,
          searchingType: "services"
        }

      case 'SEARCHING_SUPPLIERS':
        return {
          ...state,
          searchingType: "suppliers"
        }

>>>>>>> 837b15487b00e44fa1abfd11991e4690315e640c
    default:
      return state;
  }
};

export default reducer;
