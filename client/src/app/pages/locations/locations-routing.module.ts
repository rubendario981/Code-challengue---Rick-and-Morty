import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailLocationComponent } from '../detail-location/detail-location.component';
import { LocationsComponent } from './locations.component';

const routes: Routes = [
  { path: "", component: LocationsComponent },
  { path: "details/:id", component: DetailLocationComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
