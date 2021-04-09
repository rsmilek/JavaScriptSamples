import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { IntervalComponent } from './interval/interval.component';
import { IotChartComponent } from './iot-chart/iot-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    IntervalComponent,
    IotChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
