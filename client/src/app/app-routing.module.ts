import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { 
    path: "locations",
    loadChildren: ()=> import("./pages/locations/locations.module").then(m => m.LocationsModule)
  },
  { 
    path: "episodes",
    loadChildren: () => import("./pages/episodes/episodes.module").then(m => m.EpisodesModule)
  },
  { 
    path: "characters",
    loadChildren: () => import("./pages/characters/characters.module").then(m => m.CharactersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
