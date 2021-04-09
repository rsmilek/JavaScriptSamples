import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  public intervalIndex: number;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.intervalIndex.subscribe(value => this.intervalIndex = value)
  }

  public onIntervalChange(index: number) {
    this.dataService.setIntervalIndex(index);
  }

  get intervals(): string[] {
    return this.dataService.intervals;
  }
}
