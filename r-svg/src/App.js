/*
  This SVG inlining demo is inspired following articles:
  - https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs
  - https://egghead.io/lessons/react-add-svgs-as-react-components-with-create-react-app-2-0
*/

import React from "react";
// This imports SVG as an image
import logo from "./logo.svg";
// This imports SVG as React component inline SVG
import { ReactComponent as LogoInline } from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* This uses SVG as an image */}
        <img src={logo} className="App-logo" alt="logo" />
        {/* This uses SVG image as React component inline SVG*/}
        <LogoInline className="App-logo-inline" alt="Logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
