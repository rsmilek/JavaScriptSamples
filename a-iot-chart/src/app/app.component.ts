import { Component } from '@angular/core';

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
}