import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Episode } from 'src/app/models/ModelEpisode';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-detail-episode',
  templateUrl: './detail-episode.component.html',
  styleUrls: ['./detail-episode.component.css']
})
export class DetailEpisodeComponent {
  public episode!: Episode;
  public id!: number;
  
  constructor(
    private requestEpisode: EpisodesService,
    private routeActive: ActivatedRoute
  ){

  }

  ngOnInit(){
    this.routeActive.params.subscribe((params: Params)=>{
      this.id = params["id"]
    })
    this.requestEpisode.getDetailEpisode(this.id).subscribe(
      response => this.episode = response
    )
  }
}
