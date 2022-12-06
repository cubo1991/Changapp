//import {} from "../actions/index"

import { GET_DETAILS, GET_SERVICES, GET_SUPPLIERS } from "../Constantes/Constantes";

const initialState = {
  services: [],
  suppliers: [],
  supplierDetails: [],
  searchingType: "",
  searching: false,
  categories: []

};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_SERVICES':
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
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload
      }
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        services: action.payload
      }
    case "FILTER_BY_LOCATION":
      return {
        ...state,
        services: action.payload
      }

    default:
      return state;
  }
};

export default reducer;
