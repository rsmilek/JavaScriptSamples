import React, { Component } from "react";
import NumberInput from "./Num­berInput";
import Operation from "./Operation";
import OperationSelect from "./OperationSelect";

export default class CalculatorForm extends Component {
  operations = {
    [Operation.ADD]: "Add",
    [Operation.SUBTRACT]: "Subtract",
    [Operation.MULTIPLY]: "Multiply",
    [Operation.DIVIDE]: "Divide"
  };

  state = {
    x: 0,
    y: 0,
    operation: null,
    output: null
  };

  calculate() {
    const { x, y, operation } = this.state;
    switch (operation) {
      case Operation.ADD:
        return x + y;
      case Operation.SUBTRACT:
        return x - y;
      case Operation.MULTIPLY:
        return x * y;
      case Operation.DIVIDE:
        return x / y;
      default:
        return null; // Sem by to nikdy nemělo dojít.
    }
  }

  handleSubmit = event => {
    event.preventDefault(); // Zamezíme výchozí akci pri pokusu o odeslani formulare
    const output = this.calculate(); // Spocitame vysledek
    this.setState({ output }); // Update stavu komponenty
    this.props.onOutputChange(output); // Propace vysledku navenek
  };

  // Nyní, když už máme příslušné části, můžeme složit komponentu našeho formuláře:
  render() {
    return (
      <form className="CalculatorForm" onSubmit={this.handleSubmit}>
        <NumberInput
          name="x"
          label="First number:"
          value={this.state.x}
          onChange={value => this.setState({ x: value })}
        />
        <NumberInput
          name="y"
          label="Second number:"
          value={this.state.y}
          onChange={value => this.setState({ y: value })}
        />
        <OperationSelect
          name="operation"
          label="Operation:"
          operations={this.operations}
          value={this.state.operation}
          onChange={value => this.setState({ operation: value })}
        />
        <input type="submit" value="Calculate" />
      </form>
    );
  }
}
