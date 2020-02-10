import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: this.props.value // Initialize state of react component by given property 'value'
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 }); // Stores new value into state.count & synchronize view (update UI by new value) by async call or render() method
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })} // Must be passed function reference. Arrow function is a way how to pass some parameters
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; // m-2 means margin 2
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}
