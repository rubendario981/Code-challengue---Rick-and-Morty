import { Component } from '@angular/core';
import { Character } from 'src/app/models/ModelCharacter';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CharactersService]
})

export class HomeComponent {
  public characters: Character[];
  constructor(private requestCharacter: CharactersService){
    this.characters = []
  }

  ngOnInit(){
    this.requestCharacter.getAllCharacters().subscribe(
      response => this.characters = response.results.splice(0, 6)      
    )
  }
}
