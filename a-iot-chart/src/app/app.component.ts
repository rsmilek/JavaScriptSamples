import { Component } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

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

  itemChanged(index: number) {
    console.log(`Item ${index} clicked!`);
    this.activeIdx = index;
  }


  public lineChartData: ChartDataSets[] = [ { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' } ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() { }
}