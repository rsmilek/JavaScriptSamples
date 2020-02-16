import React, { Component } from "react";
import Chart from "chart.js";

export default class IotChart extends Component {
  series = [
    {
      t: "2020-02-12T00:00",
      y: 5
    },
    {
      t: "2020-02-12T01:00",
      y: 5
    },
    {
      t: "2020-02-12T02:00",
      y: 5
    },
    {
      t: "2020-02-12T03:00",
      y: 3
    },
    {
      t: "2020-02-12T04:00",
      y: 3
    },
    {
      t: "2020-02-12T05:00",
      y: 1
    },
    {
      t: "2020-02-12T06:00",
      y: 1
    },
    {
      t: "2020-02-12T07:00",
      y: 1
    },
    {
      t: "2020-02-12T08:00",
      y: 1
    },
    {
      t: "2020-02-12T09:00",
      y: 3
    },
    {
      t: "2020-02-12T10:00",
      y: 4
    },
    {
      t: "2020-02-12T11:00",
      y: 5
    },
    {
      t: "2020-02-12T12:00",
      y: 6
    },
    {
      t: "2020-02-12T13:00",
      y: 6
    },
    {
      t: "2020-02-12T14:00",
      y: 7
    },
    {
      t: "2020-02-12T15:00",
      y: 7
    },
    {
      t: "2020-02-12T16:00",
      y: 6
    },
    {
      t: "2020-02-12T17:00",
      y: 4
    },
    {
      t: "2020-02-12T18:00",
      y: 3
    },
    {
      t: "2020-02-12T19:00",
      y: 3
    },
    {
      t: "2020-02-12T20:00",
      y: 3
    },
    {
      t: "2020-02-12T21:00",
      y: 3
    },
    {
      t: "2020-02-12T22:00",
      y: 2
    },
    {
      t: "2020-02-12T23:00",
      y: 2
    },
    {
      t: "2020-02-12T24:00",
      y: 2
    }
  ];

  series2 = [
    {
      t: "2020-02-12T00:00",
      y: 1
    },
    {
      t: "2020-02-12T01:00",
      y: 2
    },
    {
      t: "2020-02-12T02:00",
      y: 3
    },
    {
      t: "2020-02-12T03:00",
      y: 4
    },
    {
      t: "2020-02-12T04:00",
      y: 5
    },
    {
      t: "2020-02-12T05:00",
      y: 6
    },
    {
      t: "2020-02-12T06:00",
      y: 7
    }
  ];

  data = {
    datasets: [
      {
        label: "Temp",
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
      this.data.datasets[0].data = this.series;
    } else {
      this.data.datasets[0].data = this.series2;
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
          <canvas id="iotChart" ref={this.chartRef} />{" "}
        </div>
        <button onClick={this.handleClick}>Button</button>
      </React.Fragment>
    );
  }
}
