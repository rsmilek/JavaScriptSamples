import React, { Component } from "react";
import NumberInput from "./Num­berInput";
import Operation from "./Operation";
import OperationSelect from "./OperationSelect";

class CalculatorForm extends Component {
  constructor(props) {
    super(props);
    this.operations = {
      [Operation.ADD]: "Sčítání",
      [Operation.SUBTRACT]: "Odčítání",
      [Operation.MULTIPLY]: "Násobení",
      [Operation.DIVIDE]: "Dělení"
    };
    this.state = {
      x: 0,
      y: 0,
      operation: null,
      output: null
    };
    // V konstruktoru definujeme obecnou obsluhu handleChange a poté nabindujeme konkrétní obslužné metody handleChangeX a handleChangeY
    // pro oba číselné vstupy. Tyto metody poté předáme právě v atributu onChange instancím komponenty NumberInput.
    const handleChange = (name, value) => this.setState({ [name]: value });
    this.handleChangeX = handleChange.bind(this, "x");
    this.handleChangeY = handleChange.bind(this, "y");
    this.handleChangeOperation = handleChange.bind(this, "operation");
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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

  handleSubmit(event) {
    event.preventDefault(); // Zamezíme výchozí akci pri pokusu o odeslani formulare
    const output = this.calculate(); // Spocitame vysledek
    this.setState({ output }); // Update stavu komponenty
    this.props.onOutputChange(output); // Propage vysledku navenek
  }

  // Nyní, když už máme příslušné části, můžeme složit komponentu našeho formuláře:
  render() {
    return (
      <form className="CalculatorForm" onSubmit={this.handleSubmit}>
        <NumberInput
          name="x"
          label="První číslo:"
          value={this.state.x}
          onChange={this.handleChangeX}
        />
        <NumberInput
          name="y"
          label="Druhé číslo:"
          value={this.state.y}
          onChange={this.handleChangeY}
        />
        <OperationSelect
          name="operation"
          label="Operace:"
          operations={this.operations}
          value={this.state.operation}
          onChange={this.handleChangeOperation}
        />
        <input type="submit" value="Spočítej" />
      </form>
    );
  }
}

export default CalculatorForm;
