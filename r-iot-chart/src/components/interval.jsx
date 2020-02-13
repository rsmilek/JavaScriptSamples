/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Interval extends Component {
  state = {
    intervals: ["Day", "Month", "Year"]
  };

  handleClick = (id, event) => {
    event.preventDefault();
    console.log(id);
  };

  render() {
    return (
      <React.Fragment>
        <nav aria-label="Interval pagination">
          <ul className="pagination m-2">
            {this.state.intervals.map(i => (
              <li className="page-item" key={i}>
                <a
                  className="page-link"
                  href="#"
                  onClick={event => this.handleClick(i, event)}
                >
                  {i}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Interval;
