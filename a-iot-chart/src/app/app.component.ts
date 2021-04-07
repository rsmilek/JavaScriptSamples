import { Component } from '@angular/core';

import { Chart } from 'chart.js';

import { DATA_DAY } from "../data/seriesDay";
import { DATA_WEEK } from "../data/seriesWeek";
import { DATA_MONTH } from "../data/seriesMonth";

const INTERVAL_DEFAULT = 'Day';
const INTERVALS: string[] = [INTERVAL_DEFAULT, 'Month', 'Year'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'a-iot-chart';

  private data = {
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

  private options = {
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

  private myChart: Chart;

  public intervals: string[] = INTERVALS;
  public activeIdx: number = INTERVALS.indexOf(INTERVAL_DEFAULT);

  private CreateChart() {
    this.myChart = new Chart("myChart", {
      type: "line",
      data: this.data,
      options: this.options
    });
  }

  public ItemChanged(index: number) {
    this.activeIdx = index;

    switch (this.activeIdx) {
      case 0:
        this.data.datasets[0].data = DATA_DAY.series;
        this.options.scales.xAxes[0] = DATA_DAY.xAxes;
        break;

      case 1:
        this.data.datasets[0].data = DATA_WEEK.series;
        this.options.scales.xAxes[0] = DATA_WEEK.xAxes;
        break;

      case 2:
        this.data.datasets[0].data = DATA_MONTH.series;
        this.options.scales.xAxes[0] = DATA_MONTH.xAxes;
        break;
      
      default:
        console.log(`ERROR '${arguments.callee.name}': Invalid index value = ${index}!`);
        break;
    }

    this.myChart.data = this.data;
    this.myChart.options = this.options;

    this.myChart.update();
  }

  constructor() { }

  ngOnInit() { 
    this.CreateChart();
    this.ItemChanged(this.activeIdx);
  }
}