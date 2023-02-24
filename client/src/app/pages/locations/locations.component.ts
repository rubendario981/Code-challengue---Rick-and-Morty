import { Component } from '@angular/core';
import {Location} from '../../models/ModelLocation'
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  providers: [LocationsService]
})
export class LocationsComponent {
  public locations: Location[];
  constructor(
    private requestLocations: LocationsService,
  ){
    this.locations = []
  }

  ngOnInit(){
    this.requestLocations.getAllLocations().subscribe(
      response => this.locations = response.results
    )
  }
  
  
}
