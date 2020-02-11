import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset} // Populate event on parent component
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter} // Pass content to child react component by property 'counter' to be ready for future expansion
            onIncrement={this.props.onIncrement} // Populate event on parent component
            onDelete={this.props.onDelete} // Populate event on parent component
          >
            {/** Pass content to react component as 'children' attribute */}#
            {counter.id}
          </Counter>
        ))}
      </div>
    );
  }
}
