import React, { Component } from "react";
import CalculatorForm from "./calculator/Cal­culatorForm";
import Output from "./calculator/Output";
import "./App.css";

/* 
Struktura HTML stranky kterou chceme vytvorit

<html>
<body>

<form>
    <label for="x">
        První číslo: <input id="x" type="number" name="x" required value="0" />
    </label>
    <label for="y">
        Druhé číslo: <input id="y" type="number" name="y" required value="0" />
    </label>
    <label for="operation">
        Operace:
        <select id="operation" name="operation" required value="">
            <option value="">--Vyberte operaci--</option>
            <option value="add">Sčítání</option>
            ...
        </select>
    </label>
    <input type="submit" value="Spočítej" />
</form>
<div>Výsledek je: 10</div>

</body>
</html> 
*/

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { output: null };
    this.propagateResult = output => this.setState({ output });
  }

  // Nakonec se tedy podíváme na samotnou komponentu naší aplikace, kterou upravíme následovně:
  render() {
    const title = "React calculator";
    return (
      <div className="App">
        <h1>{title}</h1>
        <CalculatorForm onOutputChange={this.propagateResult} />
        <Output value={this.state.output} />
      </div>
    );
  }
}
