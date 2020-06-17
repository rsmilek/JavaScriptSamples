import "./index.css";
import "magnific-popup/dist/magnific-popup.css"; // Third party plugin CSS
import "./css/styles.css"; // Core theme CSS (includes Bootstrap)
import "bootstrap/dist/js/bootstrap.bundle.min"; // Bootstrap core JS
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
