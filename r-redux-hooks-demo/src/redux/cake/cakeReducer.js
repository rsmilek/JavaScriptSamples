import { BYE_CAKE } from "./cakeTypes";

// Redux state object
const initialState = {
  numberOfCakes: 10
};

// Redux reducer - changes app from given 'state' to new one by given 'action'
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BYE_CAKE:
      return { ...state, numberOfCakes: state.numberOfCakes - 1 };
    default:
      return state;
  }
};

export default cakeReducer;
