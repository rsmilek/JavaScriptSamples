import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";

// Because Redux store should have just only one reducer that is why we must combine particular reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

export default rootReducer;
