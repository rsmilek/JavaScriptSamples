import React from "react";
import "./App.css";
import "./components/NoteContainer";
import NoteContainer from "./components/NoteContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NoteContainer />
      </div>
    </Provider>
  );
}

export default App;
