import { Component, AfterViewInit } from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {
  private map!: Leaflet.Map;

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }

/** Add into section style in angular.json:
 * "./node_modules/leaflet/dist/leaflet.css"
*/

  private initMap(): void {
    this.map = Leaflet.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

}