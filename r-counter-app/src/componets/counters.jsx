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

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          // Pass content to react component by property 'value' & as children attribute
          <Counter key={counter.id} value={counter.value}>
            #{counter.id}
          </Counter>
        ))}
      </div>
    );
  }
}
