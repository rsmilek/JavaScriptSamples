import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { Chart } from 'chart.js';

const DATA = {
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

const OPTIONS = {
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


@Component({
  selector: 'iot-chart',
  templateUrl: './iot-chart.component.html',
  styleUrls: ['./iot-chart.component.css']
})
export class IotChartComponent implements OnInit {

  private myChart: Chart;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.createChart();

    this.dataService.chartData.subscribe(value => {
      let chartData = value;

      let dataNew = {...DATA};
      dataNew.datasets[0].data = chartData.series;
      this.myChart.data = dataNew;

      let optionsNew = {...OPTIONS};
      optionsNew.scales.xAxes[0] = chartData.xAxes;
      this.myChart.options = optionsNew;

      this.myChart.update();
    });
  }

  private createChart() {
    this.myChart = new Chart("chart", {
      type: "line",
      data: DATA,
      options: OPTIONS
    });
  }

}
