import React, { Component } from "react";
//import logo from "./logo.svg";
import NavBar from "./componets/navbar";
import Counters from "./componets/counters";
import "./App.css";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - created");
  }

  componentDidMount() {
    console.log("App - mounted");
    // f.g. get data from server
  }

  handleReset = () => {
    console.log("Event handler Reset called!");
    const counters = [...this.state.counters]; // Clone array
    counters.forEach(c => (c.value = 0)); // Reset counter value
    this.setState({ counters }); // Update state & virtual DOM
  };

  handleIncrement = counter => {
    console.log("Event handler Increment called!", counter);
    const index = this.state.counters.indexOf(counter); // Search for index of given counter object
    const counters = [...this.state.counters]; // Clone array
    counters[index].value++; // Increment counter value
    this.setState({ counters }); // Update state & virtual DOM
  };

  handleDelete = counterId => {
    console.log("Event handler Delete called!", counterId);
    // To delete counter given by 'counterId' we need to modify 'state.counters' by new array without specified counter element
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    console.log("App - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length} //Total number of counters in sense none zero value
        />
        <main className="container">
          <Counters
            counters={this.state.counters} // Pass content to child react component
            onReset={this.handleReset} // Pass reference to raise event handler to child react component
            onIncrement={this.handleIncrement} // Pass reference to raise event handler to child react component
            onDelete={this.handleDelete} // Pass reference to event raise handler to child react component
          />
        </main>
      </React.Fragment>
    );
  }
}
