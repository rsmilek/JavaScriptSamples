import React from "react";
import "./App.css";
import "./components/cakeContainerHooks";
import "./components/iceCreamContainerHooks";
import CakeContainerHooks from "./components/cakeContainerHooks";
import IceCreamContainerHooks from "./components/iceCreamContainerHooks";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    // Providing Redux store to application
    <Provider store={store}>
      <div className="App">
        <CakeContainerHooks />
        <IceCreamContainerHooks />
      </div>
    </Provider>
  );
}

export default App;
