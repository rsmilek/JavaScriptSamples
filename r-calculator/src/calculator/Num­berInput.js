import React, { Component } from "react";

export default class InputNumber extends Component {
  state = {};
  render() {
    return (
      // Bystřejší z vás už asi postřehli, že je zde jedna změna.
      // Místo HTML atributu for je u <label> použit htmlFor.
      // To proto, že když mixujeme HTML přímo do JS, tak nesmíme zapomenout, že for je v JS rezervované klíčové slovo pro cyklus.
      // JSX tedy místo něj zavádí náhradu, která se ale do výsledného HTML přeloží správně jako for.
      <label htmlFor="x">
        První číslo:
        <input id="x" type="number" name="x" required value="0" />
      </label>
    );
  }
}
