import React, { Component } from "react";
import CalculatorForm from "./calculator/Cal­culatorForm";
import Output from "./calculator/Output";
import "./App.css";

/* 
Structure of HTML page we would like to create:

<html>
<body>

<form>
    <label for="x">
        First number: <input id="x" type="number" name="x" required value="0" />
    </label>
    <label for="y">
        Second number: <input id="y" type="number" name="y" required value="0" />
    </label>
    <label for="operation">
        Operation:
        <select id="operation" name="operation" required value="">
            <option value="">--Choose operation--</option>
            <option value="add">Add</option>
            ...
        </select>
    </label>
    <input type="submit" value="Calculate" />
</form>
<div>Result is: 10</div>

</body>
</html> 
*/

export default class App extends Component {
  state = { output: null };

  render() {
    const title = "React calculator";
    return (
      <div className="App">
        <h1>{title}</h1>
        <CalculatorForm onOutputChange={output => this.setState({ output })} />
        <Output value={this.state.output} />
      </div>
    );
  }
}
