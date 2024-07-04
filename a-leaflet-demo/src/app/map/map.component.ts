import { Component, AfterViewInit } from '@angular/core';
import * as Leaflet from 'leaflet';

Leaflet.Icon.Default.imagePath = 'assets/';

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

/** 
 * Modify angular.json:
 * 
 * 1. Add into 'style' section
 * "./node_modules/leaflet/dist/leaflet.css"
 * 
 * 2. Add into 'assets' section
 * "./node_modules/leaflet/dist/images" and define Leaflet.Icon.Default.imagePath = 'assets/';
 * or
 * add images directly into assets
 */

  private initMap(): void {    

    // var map = L.map('map').setView([51.505, -0.09], 13);
    this.map = Leaflet.map('map', {
      center: [ 51.505, -0.09 ],
      zoom: 13
    });

    const tiles = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);


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
  }

}