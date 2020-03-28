import React from "react";
import "./App.css";
import "./components/cakeContainer";
import CakeContainer from "./components/cakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    // Providing Redux store to application
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
