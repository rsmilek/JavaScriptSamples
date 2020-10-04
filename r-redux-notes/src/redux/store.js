import { createStore } from "redux";
import note from "./note/noteReducer";

const store = createStore(note);

export default store;
