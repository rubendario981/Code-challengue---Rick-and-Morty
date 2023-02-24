import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEpisodeComponent } from '../detail-episode/detail-episode.component';
import { EpisodesComponent } from './episodes.component';

const routes: Routes = [  
  { path: "", component: EpisodesComponent},
  { path: "details/:id", component: DetailEpisodeComponent},
  { path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EpisodesRoutingModule { }
