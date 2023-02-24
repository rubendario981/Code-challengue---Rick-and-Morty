import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEpisodeComponent } from './pages/detail-episode/detail-episode.component';
import { DetaisCharacterComponent } from './pages/detais-character/detais-character.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { 
    path: "locations",
    loadChildren: ()=> import("./pages/locations/locations.module").then(m => m.LocationsModule)
  },
  { path: "episodes", component: EpisodesComponent },
  { path: "detail-episode/:id", component: DetailEpisodeComponent},
  { path: "detail-character/:id", component: DetaisCharacterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
