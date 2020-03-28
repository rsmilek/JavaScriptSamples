import { createStore } from "redux";
import rootReducer from "./rootReducer";

// Creating of Redux store from given reducer
const store = createStore(rootReducer);

export default store;
