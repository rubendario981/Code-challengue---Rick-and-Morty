import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/ModelCharacter';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-small-card-character',
  templateUrl: './small-card-character.component.html',
  styleUrls: ['./small-card-character.component.css'],
  providers: [CharactersService]
})
export class SmallCardCharacterComponent {
  @Input() url!: string
  public character!: Character
  public id!: number;
  constructor(private requestCharacters: CharactersService){
  }

  ngOnInit(){
    this.id = parseInt(this.url.split("/")[5])
    this.requestCharacters.getDetailCharacter(this.id).subscribe(
      response => this.character = response
    )
  }
}
