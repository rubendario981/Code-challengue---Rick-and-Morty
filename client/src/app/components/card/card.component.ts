import { Component, Input } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [CharactersService]
})

export class CardComponent {
  @Input() id!: number
  @Input() name!: string;
  @Input() status!: string;
  @Input() speccy!: string;
  @Input() origin!: string;
  @Input() episode!: string;
  @Input() image!: string;
  public nameEpisode: string;
  
  constructor(private requestCharacter : CharactersService){
    this.nameEpisode = "";
  }
  
  ngOnInit(){
    this.requestCharacter.getFirstEpisodeName(this.episode[0].split("/")[5]).subscribe(
      response => this.nameEpisode = response
    )
  }
}
