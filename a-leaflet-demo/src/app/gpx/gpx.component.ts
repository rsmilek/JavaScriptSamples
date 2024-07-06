import { AfterViewInit, Component } from '@angular/core';
import * as Leaflet from "leaflet";
import "leaflet-gpx";
import 'leaflet-easyprint';
import DomToImage from 'dom-to-image';

@Component({
  selector: 'app-gpx',
  templateUrl: './gpx.component.html',
  styleUrl: './gpx.component.scss'
})
export class GpxComponent implements AfterViewInit {

  map!: Leaflet.Map;
  tile!: any;
  imgData!: string;

  constructor() { }

  ngAfterViewInit(): void {
    this.displayGpx();
  }

  
  public onExportEasyPrintManual(): void {
    var printPlugin = (Leaflet as any).easyPrint({
      tileLayer: this.tile,
      sizeModes: ['Current'/*, 'A4Portrait', 'A4Landscape'*/],
      filename: 'pokus',
      exportOnly: true,
      // hideControlContainer: true,
      // hidden: true // Hides Print button
    }).addTo(this.map);
    printPlugin.printMap('CurrentSize', 'MyManualPrint');
  }


  public onExportDomToImage(): void {
    var node = this.map.getContainer();

    DomToImage.toPng(node, {
      width: 300,
      height: 400
    })
    .then((dataUrl: string) => {
        // console.log(dataUrl);
        // console.log(node.style.width);
        // console.log(parseInt(node.style.height));

        this.imgData = dataUrl;

        var link = document.createElement('a');
        link.style.display = 'none';
        link.download = 'my-image-name.png';
        link.href = dataUrl;
        link.click();            
    })
    .catch((error) => {
        console.error('oops, something went wrong!', error);
    });
  }


  public onExportImgOverlay(): void {
    var node = document.getElementById('capture');

    DomToImage.toPng(node!)
      .then((dataUrl) => {
          var link = document.createElement('a');
          link.style.display = 'none';
          link.download = 'my-image-name2.png';
          link.href = dataUrl;
          link.click();            
      })
      .catch((error) => {
          console.error('oops, something went wrong!', error);
      });
  }

  public getImgData() {
    return this.imgData;
  }


  private displayGpx(): void {
    const map = Leaflet.map('map', {
      zoomControl: false, // Disable the default zoom control
      dragging: false,    // Disable dragging
      scrollWheelZoom: false, // Disable zooming by scroll wheel
      doubleClickZoom: false, // Disable zooming by double click
      boxZoom: false,     // Disable zooming by box selection
      keyboard: false     // Disable keyboard controls      
    });

    this.map = map;

    this.tile = Leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
    }).addTo(map);

    // var gpx = 'assets/activity_16224685461.gpx'; // URL to your GPX file or the GPX itself
    var gpx = 'assets/activity_bike.gpx'; // URL to your GPX file or the GPX itself
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
        weight: 5,
        lineCap: 'round'
      }
    })
    .on('loaded', function(e) {
      map.fitBounds(e.target.getBounds());

      console.log(`name ${e.target.get_name()}`);
      console.log(`distance ${e.target.get_distance()} m`);
      console.log(`total_time ${e.target.get_total_time()} ms`);
      console.log(`total_speed ${e.target.get_total_speed()} km/h`);
      console.log(`elevation_gain ${e.target.get_elevation_gain()} m`);
    })
    .addTo(map);


    (Leaflet as any).easyPrint({
      tileLayer: this.tile,
      sizeModes: ['Current', 'A4Portrait', 'A4Landscape'],
      title: 'My awesome print button',
      position: 'bottomleft',
      exportOnly: true,
      hideControlContainer: true,
      filename: 'pokus'
    }).addTo(map);

  }

}
