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

  handleDelete = counterId => {
    console.log("Event handler called!", counterId);
    // To delete counter given by 'counterId' we need to modify 'state.counters' by new array without specified counter element
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter} // Pass content to child react component by property 'counter' to be ready for future expansion
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
