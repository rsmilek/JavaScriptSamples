//import React from "react";
import React, { Component } from "react";
import CalculatorForm from "./calculator/Cal­culatorForm";
import Output from "./calculator/Output";
import "./App.css";

export default class App extends Component {
  render() {
    const title = "React kalkulačka";

    return (
      <div className="App">
        <h1>{title}</h1>
        <CalculatorForm />
        <Output />
      </div>
    );
  }
}
