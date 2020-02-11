import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  render() {
    console.log("Counters - rendered");
    const { onReset, counters, onIncrement, onDelete } = this.props; // Destructing arguments
    return (
      <div>
        <button
          onClick={onReset} // Populate event on parent component
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter} // Pass content to child react component by property 'counter' to be ready for future expansion
            onIncrement={onIncrement} // Populate event on parent component
            onDelete={onDelete} // Populate event on parent component
          >
            {/** Pass content to react component as 'children' attribute */}#
            {counter.id}
          </Counter>
        ))}
      </div>
    );
  }
}
