import { Component, Input } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/models/ModelCharacter'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CharactersService]
})

export class CardComponent {
  @Input() id!: number;
  public character!: Character;
  @Input() firstEpisode!: Array<string>;
  @Input() showAllDetails!: boolean;
  public nameEpisode: string;

  constructor(private requestCharacter: CharactersService) {
    this.nameEpisode = "";
  }

  ngOnInit() {
    this.requestCharacter.getFirstEpisodeName(this.firstEpisode[0].split("/")[5]).subscribe(
      response => this.nameEpisode = response
    )

    this.requestCharacter.getDetailCharacter(this.id).subscribe(
      response => this.character = response
    )
  }
}
