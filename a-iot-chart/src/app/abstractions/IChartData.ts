import { IChartTimeDataPoint } from '../abstractions/IChartTimeDataPoint';

export interface IChartData {
    series: IChartTimeDataPoint[],
    xAxes: any
  }
  