//import {} from "../actions/index"

import { GET_DETAILS, GET_SUPPLIERS, ADD_CART, REMOVE_ITEM, SHOW_CART } from "../Constantes/Constantes";

const initialState = {
  services: [],
  serviceDetails: [],
  allServices: [],
  suppliers: [],
  supplierDetails: [],
  searchingType: "",
  searching: false,
  categories: [],
  cart: [],
  location: [],
  loading: true,
  users: {},
userDB:{}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_SERVICES':
    return {
      ...state,
      allServices: action.payload,
      loading: false,
    }

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
     
    case "GET_LOCATIONS":
      return {
        ...state,
        location: action.payload
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

    case ADD_CART:
      let item = action.payload
      let id = item.id
      localStorage.setItem(id, JSON.stringify(item))
      let services = JSON.parse(localStorage.getItem(id))

    
 
      return {
        ...state,
        cart: [...state.cart, services]
        
      }
    case REMOVE_ITEM:
      // let filterCart = state.cart.filter(item => item.id !== action.payload)
      localStorage.removeItem(action.payload)
      const allKeys = Object.keys(localStorage);
    const localStorageMap = allKeys.map((key) =>
      localStorage.getItem(key)
    );
    const localStorageFilter = localStorageMap.filter(e=> e.includes("serviceType"))
    const localStorageMaping= localStorageFilter.map(e=> JSON.parse(e))
      let newCart = localStorageMaping
      return {
        ...state,
        cart: newCart

      }

    case "SERVICE_DETAIL":
      return {
        ...state,
        serviceDetails: action.payload
      }
    case SHOW_CART:
      return{
        ...state,
        cart: action.payload
      } 
      case 'USER_BY_ID':
        return {
          ...state,
          userDB: action.payload
        }
        case 'UPLOAD_IMAGE_PROFILE':
          return {
            ...state,
            userDB: action.payload
          }
        case 'GET_ALL_USERS':
          return {
            ...state,
            users: action.payload
          }
    default:
      return state;
  }
};

export default reducer;
