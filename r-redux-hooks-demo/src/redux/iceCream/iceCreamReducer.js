import { BYE_ICECREAM } from "./iceCreamTypes";

// Redux state object
const initialState = {
  numberOfIceCreams: 20
};

// Redux reducer - changes app from given 'state' to new one by given 'action'
const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BYE_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
