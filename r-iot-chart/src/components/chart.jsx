import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const state = {
  datasets: [
    {
      label: "Temp",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 2,
      data: [
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
      ]
    }
  ]
};

class Chart extends Component {
  render() {
    return (
      <React.Fragment>
        <Line
          data={state}
          options={{
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
          }}
        />
      </React.Fragment>
    );
  }
}

export default Chart;
