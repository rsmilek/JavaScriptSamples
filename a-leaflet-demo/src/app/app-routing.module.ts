import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from './map/map.component';
import { GpxComponent } from './gpx/gpx.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'gpx', component: GpxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
