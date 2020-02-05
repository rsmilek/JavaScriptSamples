//import React from "react";
import React, { Component } from "react";
import CalculatorForm from "./calculator/Cal­culatorForm";
import Output from "./calculator/Output";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { output: null };
    this.propagateResult = output => this.setState({ output });
  }

  render() {
    const title = "React kalkulačka";

    return (
      <div className="App">
        <h1>{title}</h1>
        <CalculatorForm onResultChange={this.propagateResult} />
        <Output value={this.state.output} />
      </div>
    );
  }
}
