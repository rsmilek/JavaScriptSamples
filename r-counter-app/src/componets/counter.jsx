import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    console.log("Counter - rendered");
    return (
      <div>
        {/* Content given to react component by children attribute */}
        <span>{this.props.children}</span>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)} // Must be passed function reference. Arrow function is a way how to pass some parameters
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)} // 'Counter' component is raising event on 'Counters' component to be handled there
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; // m-2 means margin 2
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
