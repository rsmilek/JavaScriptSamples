import React, { Component } from "react";

class Output extends Component {
  render() {
    // V tomto kódu se děje hned několik věcí. Předáváme hodnotu zobrazovaného výsledku pomocí vlastnosti value a ukládáme ji do lokální konstanty result.
    // S tou potom pracujeme a podle její hodnoty kontrolujeme, zda máme zobrazit náš výsledek či nikoliv.
    const output = this.props.value;
    if (output || output === 0)
      // Jelikož dále budeme chtít na výsledek aplikovat CSS, označíme si ho pomocí HTML atributu class.
      // Ovšem opět se jedná o v JS rezervované slovo, takže místo toho v JSX použijeme className.
      // Ten se také používá v souvislosti s označením samotných komponent a proto za účelem přehlednosti zvolíme stejný název jako má komponenta.
      return <div className="Output">Výsledek je: {output}</div>;
    else return null;
  }
}

export default Output;
