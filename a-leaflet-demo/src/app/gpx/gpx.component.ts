import { AfterViewInit, Component } from '@angular/core';
import * as Leaflet from "leaflet";
import "leaflet-gpx";

@Component({
  selector: 'app-gpx',
  templateUrl: './gpx.component.html',
  styleUrl: './gpx.component.scss'
})
export class GpxComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    this.displayGpx();
  }

  private displayGpx(): void {

    const map = Leaflet.map('map');
    Leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
    }).addTo(map);

    var gpx = 'assets/activity_16224685461.gpx'; // URL to your GPX file or the GPX itself
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

  }

}
