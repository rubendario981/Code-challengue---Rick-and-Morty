import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/ModelCharacter';
import { Location } from 'src/app/models/ModelLocation';
import { CharactersService } from 'src/app/services/characters.service';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-card-location',
  templateUrl: './card-location.component.html',
  styleUrls: ['./card-location.component.css'],
  providers: [CharactersService]
})
export class CardLocationComponent {
  @Input() id!: number;
  public location!: Location
  public residentsCharcters: Character[];
  constructor(private requestLocation: LocationsService) {
    this.residentsCharcters = []
  }

  ngOnInit() {
    this.requestLocation.getDetailLocation(this.id).subscribe(
      response => {
        this.location = response
        // this.residentsCharcters = response.residents.splice(0, 3)
      }
    )    
  }
}
