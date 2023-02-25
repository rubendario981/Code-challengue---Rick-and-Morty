import { Component } from '@angular/core';
import { Episode } from 'src/app/models/ModelEpisode';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css'],
  providers: [EpisodesService]
})
export class EpisodesComponent {
  public episodes!: Episode[];
  constructor(private requestEpisodes: EpisodesService){
    this.episodes = []
  }

  ngOnInit(){
    this.requestEpisodes.getAllEpisodes().subscribe(
      response => this.episodes = response.results
    )
  }
}
