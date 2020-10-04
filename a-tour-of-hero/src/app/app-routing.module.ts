import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// In Angular, the best practice is to load and configure the router in a separate, top-level module
// that is dedicated to routing and imported by the root AppModule.
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
