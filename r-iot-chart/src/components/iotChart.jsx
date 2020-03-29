import React, { Component } from "react";
import Chart from "chart.js";
import { SERIES_DAY } from "../data/seriesDay";
import { SERIES_WEEK } from "../data/seriesWeek";

export default class IotChart extends Component {
  data = {
    datasets: [
      {
        label: "Outdoor",
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        data: []
      }
    ]
  };

  options = {
    responsive: true,
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            unit: "hour",
            stepSize: 3,
            displayFormats: {
              hour: "HH:mm"
            }
          }
          //   ticks: {
          //     min: "2020-02-12T00:00",
          //     max: "2020-02-13T00:00"
          //   }
        }
      ],
      yAxes: [
        {
          ticks: {
            stepSize: 2
          }
        }
      ]
    },
    title: {
      display: true,
      text: "Temperature per hour",
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

  ctx = {};
  myChart = {};

  state = { flag: true };

  constructor(props) {
    console.log("constructor", "Chart");
    super(props);
    // Create refs to React components using the React.createRef API, which will give us access to the instance methods of such component.
    // NOTE: The actual reference is stored in the current attribute of the ref.
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    console.log("componentDidMount", "Chart");
    // We get context trough current attribute of reference to React component
    this.ctx = this.chartRef.current.getContext("2d");
    this.createChart();
  }

  componentDidUpdate() {
    console.log("componentDidUpdate", "Chart");
    this.createChart();
  }

  // Assign chart's data depending on flag
  resolveChartData() {
    if (this.state.flag) {
      this.data.datasets[0].data = SERIES_DAY;
    } else {
      this.data.datasets[0].data = SERIES_WEEK;
    }
  }

  createChart() {
    console.log("createChart", "Chart");
    this.resolveChartData();
    // NOTE: Destroy & Create of Chart.js is the only way how to refresh chart with new data
    // Destroy existing chart if not empty & assigned
    if (Object.keys(this.myChart).length !== 0 && typeof this.myChart)
      this.myChart.destroy();
    // Create new instance of chart
    this.myChart = new Chart(this.ctx, {
      type: "line",
      data: this.data,
      options: this.options
    });
  }

  handleClick = () => {
    console.log("handleClick", "Chart");
    this.resolveChartData();
    this.setState({ flag: !this.state.flag });
  };

  render() {
    console.log("render", "Chart");
    return (
      <React.Fragment>
        <div>
          {/* Adding component reference to chart's canvas */}
          <canvas ref={this.chartRef} />{" "}
        </div>
        <button onClick={this.handleClick}>Button</button>
      </React.Fragment>
    );
  }
}
