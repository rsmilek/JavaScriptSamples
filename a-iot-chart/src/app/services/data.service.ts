import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DATA_DAY } from '../../data/seriesDay';
import { DATA_WEEK } from '../../data/seriesWeek';
import { DATA_MONTH } from '../../data/seriesMonth';


export const INTERVAL_INDEX_DEFAULT = 0;

export interface IChartData {
  series: any,
  xAxes: any
}

class ChartData implements IChartData {
  series: any;
  xAxes: any

  constructor (series: any, xAxes: any) {
    this.series = series;
    this.xAxes = xAxes;
  }
}

// FOR CONCEPT SEE: https://medium.com/@halleshwar141/component-interaction-in-angular-4644b3180c6e
//
// You can also use a regular RxJS Subject for sharing data via the service, but here’s why I prefer a BehaviorSubject.
// - It will always return the current value on subscription — there is no need to call onnext
// - It has a getValue() function to extract the last value as raw data.
// - It ensures that the component always receives the most recent data.
//
// In the service, we create a private BehaviorSubject that will hold the current value of the message. 
// We define a currentMessage variable handle this data stream as an observable that will be used by the components.
// Lastly, we create function that calls next on the BehaviorSubject to change its value.
//
// The parent, child, and sibling components all receive the same treatment. We inject the DataService in the constructor,
//  then subscribe to the currentMessage observable and set its value equal to the message variable.
//
// Now if we create a function in any one of these components that changes the value of the message.
// When this function is executed the new data it’s automatically broadcast to all other components.
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private chartDataValue: ChartData = new ChartData(DATA_DAY.series, DATA_DAY.xAxes);

  private intervalIndexSource = new BehaviorSubject(INTERVAL_INDEX_DEFAULT);
  private chartDataSource = new BehaviorSubject(this.chartDataValue);

  public intervals: string[] = ['Day', 'Week', 'Month'];

  public intervalIndex = this.intervalIndexSource.asObservable();
  public chartData = this.chartDataSource.asObservable();

  constructor() { }

  public setIntervalIndex(index: number) {
    // Check
    if ((index < 0) && (index < this.intervals.length)) return;
    // Update interval index
    this.intervalIndexSource.next(index);
    // Update chart data
    switch (index) {
      case 0:
        this.chartDataValue.series = DATA_DAY.series;        
        this.chartDataValue.xAxes = DATA_DAY.xAxes;        
        break;
      case 1:
        this.chartDataValue.series = DATA_WEEK.series;        
        this.chartDataValue.xAxes = DATA_WEEK.xAxes;        
        break;
      case 2:
        this.chartDataValue.series = DATA_MONTH.series;        
        this.chartDataValue.xAxes = DATA_MONTH.xAxes;        
        break;
    }
    this.chartDataSource.next(this.chartDataValue);
  }

}
