import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

import { INTERVAL_INDEX_DEFAULT } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'a-iot-chart';

  constructor(private dataSevice: DataService) { }

  ngOnInit() {
    // Initialize app to default state 
    this.dataSevice.setIntervalIndex(INTERVAL_INDEX_DEFAULT);
  }
}