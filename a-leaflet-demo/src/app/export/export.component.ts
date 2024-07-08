import { Component, AfterViewInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import './leaflet-easyexport';

Leaflet.Icon.Default.imagePath = 'assets/';

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
  private tileLayer!: Leaflet.TileLayer;
  private printer!: any;
  private imgData!: string;

  constructor() { }

  public ngAfterViewInit(): void {
    this.initMap();
  }

  public getImgData() {
    return this.imgData;
  }

  public onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      let files = input.files;
      for (let index = 0; index < files.length; index++) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.displayGpx(reader.result as string);
        };
        reader.readAsText(files[index]);
      }
    }
  }  

  public onPrintManual() {
    // this.printer.printMap('CurrentSize', 'MyManualPrint');
    // this.printer.printMap('A4Landscape page', 'MyManualPrint');

    this.printer.options.a4PageSize.width = 400;
    this.printer.options.a4PageSize.height = 400;
    this.printer.options.exportSaveDialog = true;
    this.printer.printMap('A4Landscape page', 'MyManualPrint');
  }


  private initMap(): void {    
    this.map = Leaflet.map('map', {
      center: [ 51.505, -0.09 ],
      zoom: 12,
      // zoomControl: false, // Disable the default zoom control
      // dragging: false,    // Disable dragging
      // scrollWheelZoom: false, // Disable zooming by scroll wheel
      // doubleClickZoom: false, // Disable zooming by double click
      // boxZoom: false,     // Disable zooming by box selection
      // keyboard: false     // Disable keyboard controls      
    });

    this.tileLayer = Leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // maxZoom: 18,
      // minZoom: 3,
      attribution: 'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
    }).addTo(this.map);

    this.printer = (Leaflet as any).easyPrint({
      tileLayer: this.tileLayer,
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

  private displayGpx(gpx: string): void {
    new Leaflet.GPX(gpx, {
      async: true,
      // marker_options: {
      //   startIconUrl: "assets/marker-icon.png",
      //   endIconUrl: "assets/marker-icon.png",
      //   shadowUrl: "assets/marker-shadow.png"
      // },
      marker_options: {
        startIconUrl: 'https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-icon-start.png',
        endIconUrl: 'https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-icon-end.png',
        shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet-gpx@1.7.0/pin-shadow.png'
      },
      polyline_options: {
        color: 'blue',
        opacity: 0.75,
        weight: 3,
        lineCap: 'round'
      }
    })
    .on('loaded', (e) => {
      this.map.fitBounds(e.target.getBounds());

      console.log(`name ${e.target.get_name()}`);
      console.log(`distance ${e.target.get_distance()} m`);
      console.log(`total_time ${e.target.get_total_time()} ms`);
      console.log(`total_speed ${e.target.get_total_speed()} km/h`);
      console.log(`elevation_gain ${e.target.get_elevation_gain()} m`);
    })
    .addTo(this.map);
  }

}
