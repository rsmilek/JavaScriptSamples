import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

// Creating of Redux store
const store = createStore(cakeReducer);

export default store;
