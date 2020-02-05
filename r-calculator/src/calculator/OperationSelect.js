import React, { Component } from "react";

class OperationSelect extends Component {
  state = {};
  render() {
    return (
      <label htmlFor="operation">
        Operace:
        <select id="operation" name="operation" required value="">
          <option value="">--Vyberte operaci--</option>
          <option value="add">Sčítání</option>
        </select>
      </label>
    );
  }
}

export default OperationSelect;
