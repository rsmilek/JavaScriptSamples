import React, { Component } from "react";
import Chart from "chart.js";

export default class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    const data = {
      //Bring in data
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Rainfall",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [65, 59, 80, 81, 56]
        }
      ]
    };

    const options = {
      //Customize chart options
      title: {
        display: true,
        text: "Average Rainfall per month",
        fontSize: 20
      },
      legend: {
        display: true,
        position: "right"
      },
      animation: {
        duration: 0
      }
    };

    new Chart(myChartRef, {
      type: "line",
      data: data,
      options: options
    });
  }

  render() {
    return (
      <div>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
