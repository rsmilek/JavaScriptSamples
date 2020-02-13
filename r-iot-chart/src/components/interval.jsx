/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Interval extends Component {
  state = {};

  handleClick = (id, event) => {
    event.preventDefault();
    console.log(id);
  };

  render() {
    return (
      <React.Fragment>
        <nav aria-label="Page navigation example">
          <ul className="pagination m-2">
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item active">
              <a
                className="page-link"
                href="#"
                onClick={event => this.handleClick("Day", event)}
              >
                Day
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={event => this.handleClick("Month", event)}
              >
                Month
              </a>
            </li>
            <li className="page-item">
              <a
                className="page-link"
                href="#"
                onClick={event => this.handleClick("Year", event)}
              >
                Year
              </a>
            </li>
            <li className="page-item disabled">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>{" "}
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Interval;
