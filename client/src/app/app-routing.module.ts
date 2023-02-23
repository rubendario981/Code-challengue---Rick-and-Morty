import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEpisodeComponent } from './pages/detail-episode/detail-episode.component';
import { DetailLocationComponent } from './pages/detail-location/detail-location.component';
import { DetaisCharacterComponent } from './pages/detais-character/detais-character.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationsComponent } from './pages/locations/locations.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { path: "locations", component: LocationsComponent },
  { path: "episodes", component: EpisodesComponent },
  { path: "detail-location/:id", component: DetailLocationComponent },
  { path: "detail-episode/:id", component: DetailEpisodeComponent},
  { path: "detail-character/:id", component: DetaisCharacterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
