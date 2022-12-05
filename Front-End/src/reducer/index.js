//import {} from "../actions/index"

const initialState = {
  services: [],
  searchingType: "",
  searching: false,
  suppliers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

      case 'ADD_SERVICES':
      return {
        ...state,
        services: action.payload,
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

    default:
      return state;
  }
};

export default reducer;
