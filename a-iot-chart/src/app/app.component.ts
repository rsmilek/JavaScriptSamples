import { Component } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

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

  intervals: string[] = INTERVALS;

  activeIdx: number = INTERVALS.indexOf(INTERVAL_DEFAULT);

  chart: Chart;

  itemChanged(index: number) {
    console.log(`Item ${index} clicked!`);
    this.activeIdx = index;

    switch (this.activeIdx) {
      case 1:
        this.lineChartData = [ { data: [0, 1, 2, 3, 4, 5, 6], label: 'Series B' } ];        
        break;

      case 2:
        this.lineChartData = [ { data: [6, 5, 4, 3, 2, 1, 0], label: 'Series C' } ];
        break;
      
      default:
        this.lineChartData = [ { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' } ];
        break;
    }
  }


  public lineChartData: ChartDataSets[] = [ { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' } ];

  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public lineChartOptions = {
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

  public lineChartColors: Color[] = [
    {
      // borderColor: 'black',
      // backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,1)",
    },
  ];

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() { }

}