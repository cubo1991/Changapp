//import {} from "../actions/index"

const initialState = {
  services: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_SERVICES':
      return {
        ...state,
        services: action.payload,
      }
    default:
      return state;
  }
};

export default reducer;
