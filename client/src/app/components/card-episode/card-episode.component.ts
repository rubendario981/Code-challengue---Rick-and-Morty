import { Component, Input } from '@angular/core';
import { Episode } from 'src/app/models/ModelEpisode';
import { EpisodesService } from 'src/app/services/episodes.service';

@Component({
  selector: 'app-card-episode',
  templateUrl: './card-episode.component.html',
  styleUrls: ['./card-episode.component.css'],
  providers: [EpisodesService]
})
export class CardEpisodeComponent {
  @Input() url!: string
  public id!: number;
  public episode!: Episode
  public showCharacters!: boolean
  constructor(private requestEpisode: EpisodesService){
    
  }

  ngOnInit(){
    this.id = parseInt(this.url.split("/")[5])
    this.requestEpisode.getDetailEpisode(this.id).subscribe(
      response => {
        this.episode = response        
      }
    )
    
  }
}
