import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from './map/map.component';
import { GpxComponent } from './gpx/gpx.component';
import { ExportComponent } from './export/export.component';

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path: 'gpx', component: GpxComponent },
  { path: 'export', component: ExportComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
