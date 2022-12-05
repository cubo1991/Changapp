//import {} from "../actions/index"

const initialState = {
  services: [],
  searching: false
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
    default:
      return state;
  }
};

export default reducer;
