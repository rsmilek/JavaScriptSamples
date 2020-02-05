import React, { Component } from "react";
import NumberInput from "./Num­berInput";
import OperationSelect from "./OperationSelect";

class CalculatorForm extends Component {
  state = {};
  render() {
    return (
      <form className="CalculatorForm">
        <NumberInput />
        <NumberInput />
        <OperationSelect />
        <input type="submit" value="Spočítej" />
      </form>
    );
  }
}

export default CalculatorForm;
