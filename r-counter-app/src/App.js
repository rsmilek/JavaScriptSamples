import React, { Component } from "react";
//import logo from "./logo.svg";
import NavBar from "./componets/navbar";
import Counters from "./componets/counters";
import "./App.css";

export default class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}
