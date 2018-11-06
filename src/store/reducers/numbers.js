import * as actionTypes from "../actions/actionTypes";

const initialState = {
  number: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENERATE_RAND_NUMB:
      return {
        ...state,
        number: Math.floor(Math.random() * 100) + 1
      };
    default:
      return state;
  }
};

export default reducer;
