import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

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
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-secondary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter} // Pass content to child react component by property 'counter' to be ready for future expansion
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete} // Pass reference to event handler to child react component
          >
            {/** Pass content to react component as 'children' attribute */}#
            {counter.id}
          </Counter>
        ))}
      </div>
    );
  }
}
