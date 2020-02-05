import React, { Component } from "react";

class Output extends Component {
  state = {};
  render() {
    // Jelikož dále budeme chtít na výsledek aplikovat CSS, označíme si ho pomocí HTML atributu class.
    // Ovšem opět se jedná o v JS rezervované slovo, takže místo toho v JSX použijeme className.
    // Ten se také používá v souvislosti s označením samotných komponent a proto za účelem přehlednosti zvolíme stejný název jako má komponenta.
    return <div className="Output">Výsledek je: 10</div>;
  }
}

export default Output;
