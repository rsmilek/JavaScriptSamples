import React, { Component } from "react";

export default class InputNumber extends Component {
  // Stav (state) je podobný vlastnostem, ale používá se pouze uvnitř komponenty pro řízení jejího datového toku.
  // V podstatě se jedná o privátní data komponenty pouze pro vnitřní použití. Pojďme si to opět ukázat na příkladu.
  state = { value: this.props.value };

  // Uzivatelska interakce se v ramci JS resi pomoci udalosti (event) a jejim zpracovanim.
  handleChange = event => {
    const value = event.target.value;
    this.setState({ value }); // V teto udalosti chceme aktualizovat stav teto komponenty a setState zajisti zaroven jeji prekresleni
    this.props.onChange(Number(value)); // Propagace stavu komponenty navenek za pomoci vlastnosti onChange (koverze na cislo zajsiti bud jeji hodnotu nebo NaN)
  };

  // Vykresleni komponenty
  render() {
    // Začneme konceptem vlastností (properties), které se používají pro konfiguraci a předávání dat do komponent.
    // Jednoduše napíšeme v rámci JSX ke komponentě nějaký atribut, např. x="5",
    // a tato komponenta ho poté uvnitř dostane k dispozici přes this.props, tj. this.props.x zkrátka bude 5.
    const { name, label } = this.props; // Pro ziskani hodnot vlastnosti name a label pouzijeme JS dekonstrukci objektů z ES6+

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
