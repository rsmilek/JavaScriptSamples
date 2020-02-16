import React, { Component } from "react";
import Interval from "./components/interval";
import IotChart from "./components/iotChart";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Interval />
        <IotChart />
      </div>
    );
  }
}
