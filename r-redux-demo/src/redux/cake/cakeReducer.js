import { BYE_CAKE } from "./cakeTypes";

const initialState = {
  numberOfCakes: 10
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BYE_CAKE:
      return { ...state, numberOfCakes: state.numberOfCakes - 1 };
    default:
      return state;
  }
};

export default cakeReducer;
