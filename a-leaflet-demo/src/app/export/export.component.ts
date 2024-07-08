import { Component, AfterViewInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import './leaflet-easyexport';

Leaflet.Icon.Default.imagePath = 'assets/';

function PokusFnc(value: string): any {
  console.log(`PokusFnc ${value}`);
}

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrl: './export.component.scss'
})
export class ExportComponent implements AfterViewInit {

  // Default image size - ATTENTION: easyPrint changes width -> height for landscape / portrait
  private readonly defaultWidth: number = 500;
  private readonly defaultHeight: number = 375;

  private map!: Leaflet.Map;
  private printer!: any;
  private imgData!: string;

  constructor() { }

  public ngAfterViewInit(): void {
    this.initMap();
  }

  getImgData() {
    return this.imgData;
  }

  public onPrintManual() {
    // this.printer.printMap('CurrentSize', 'MyManualPrint');
    // this.printer.printMap('A4Landscape page', 'MyManualPrint');

    this.printer.options.a4PageSize.width = 400;
    this.printer.options.a4PageSize.height = 400;
    this.printer.options.exportSaveDialog = false;
    this.printer.printMap('A4Landscape page', 'MyManualPrint');
  }


  private initMap(): void {    
    this.map = Leaflet.map('map', {
      center: [ 51.505, -0.09 ],
      zoom: 12
    });

    const tiles = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    const marker = Leaflet.marker([51.5, -0.09]).addTo(this.map);

    const circle = Leaflet.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
    }).addTo(this.map);

    const polygon = Leaflet.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(this.map);

    this.printer = (Leaflet as any).easyPrint({
      tileLayer: tiles,
      sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
      filename: 'myMap',
      exportOnly: true,
      hideControlContainer: true,
      exportSaveDialog: true,
      exportDataCallback: (dataUrl: string) => { 
        this.imgData = dataUrl;
        // Restore default values after print for further use
        this.printer.options.a4PageSize.width = this.defaultWidth;
        this.printer.options.a4PageSize.height = this.defaultHeight;
        this.printer.options.exportSaveDialog = true;
      },
      a4PageSize: {
        width: this.defaultWidth,
        height: this.defaultHeight
    }
    }).addTo(this.map);

  }

}
