import React, { Component } from "react";

export default class InputNumber extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ value });
    this.props.onChange(Number(value));
  }

  render() {
    const { name, label } = this.props;

    return (
      // Bystřejší z vás už asi postřehli, že je zde jedna změna.
      // Místo HTML atributu for je u <label> použit htmlFor.
      // To proto, že když mixujeme HTML přímo do JS, tak nesmíme zapomenout, že for je v JS rezervované klíčové slovo pro cyklus.
      // JSX tedy místo něj zavádí náhradu, která se ale do výsledného HTML přeloží správně jako for.
      <label htmlFor={name}>
        {label}
        <input
          id={name}
          type="number"
          name={name}
          required
          value={this.state.value}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}
