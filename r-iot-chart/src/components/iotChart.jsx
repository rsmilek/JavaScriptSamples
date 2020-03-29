import React, { Component } from "react";
import Chart from "chart.js";
import { DATA_DAY } from "../data/seriesDay";
import { DATA_WEEK } from "../data/seriesWeek";
import { DATA_MONTH } from "../data/seriesMonth";

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
      xAxes: []
    },
    title: {
      display: true,
      text: "Temperature",
      fontSize: 16
    },
    legend: {
      display: true,
      position: "bottom"
    },
    animation: {
      duration: 0
    }
  };

  ctx = {};
  myChart = {};

  state = { flag: 0 };

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
    switch (this.state.flag) {
      case 1:
        this.data.datasets[0].data = DATA_WEEK.series;
        this.options.scales.xAxes[0] = DATA_WEEK.xAxes;
        break;
      case 2:
        this.data.datasets[0].data = DATA_MONTH.series;
        this.options.scales.xAxes[0] = DATA_MONTH.xAxes;
        break;
      default:
        this.data.datasets[0].data = DATA_DAY.series;
        this.options.scales.xAxes[0] = DATA_DAY.xAxes;
        break;
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
    this.setState({ flag: this.state.flag < 2 ? this.state.flag + 1 : 0 });
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
