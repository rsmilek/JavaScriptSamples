/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Interval extends Component {
  state = {
    activeIdx: 0,
    intervals: ["Day", "Month", "Year"]
  };

  handleClick = (id, event) => {
    event.preventDefault();
    console.log(id);
    const activeIdx = this.state.intervals.indexOf(id);
    this.setState({ activeIdx });
  };

  render() {
    return (
      <React.Fragment>
        <nav aria-label="Interval pagination">
          <ul className="pagination justify-content-center m-2">
            {this.state.intervals.map(i => (
              <li className={this.getPageItemClasses(i)} key={i}>
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

  getPageItemClasses(id) {
    const idx = this.state.intervals.indexOf(id);
    let classes = "page-item";
    if (idx === this.state.activeIdx) classes += " active";
    return classes;
  }
}

export default Interval;
