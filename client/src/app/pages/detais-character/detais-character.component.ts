import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Character } from 'src/app/models/ModelCharacter';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-detais-character',
  templateUrl: './detais-character.component.html',
  styleUrls: ['./detais-character.component.css']
})
export class DetaisCharacterComponent {
  public id!:number;
  public character!: Character;

  constructor(private requestCharacter: CharactersService,
    private param: ActivatedRoute){

  }

  ngOnInit(){
    this.param.params.subscribe((param: Params)=>{
      this.id = param["id"]

    })
    this.requestCharacter.getDetailCharacter(this.id).subscribe(
      response => this.character = response
    )
  }
}
