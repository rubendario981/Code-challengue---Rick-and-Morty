import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from 'src/app/models/ModelLocation';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-detail-location',
  templateUrl: './detail-location.component.html',
  styleUrls: ['./detail-location.component.css']
})
export class DetailLocationComponent {
  public id!: number;
  public location!: Location;
  constructor(private requestLocation: LocationsService,
    private param: ActivatedRoute){}

  ngOnInit(){
    this.param.params.subscribe((param: Params) =>{
      this.id = param["id"]
    })
    this.requestLocation.getDetailLocation(this.id).subscribe(
      response => this.location = response
    )
  }
}
