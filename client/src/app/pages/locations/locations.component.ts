import { Component, HostListener } from '@angular/core';
import { Location } from '../../models/ModelLocation'
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  providers: [LocationsService]
})
export class LocationsComponent {
  public locations: Location[];
  public pages!: number;
  public currentPage!: number;
  public endPage!: boolean;

  constructor( private requestLocations: LocationsService ) {
    this.locations = []
  }

  @HostListener("window:scroll")
  loadMore() {
    const scrollTop = document.documentElement.scrollTop;    
    if ((this.currentPage < this.pages) && (this.currentPage * 2400 < scrollTop)) {
      this.currentPage++
      this.requestLocations.getLocationsByPage(this.currentPage).subscribe(
        response => {
          response.results.map((el: Location) => {
            this.locations.push(el)
          })
        }
      )
    }
    
    if (this.currentPage === this.pages) this.endPage = true

  }

  ngOnInit() {
    this.requestLocations.getAllLocations().subscribe(
      response => {
        this.locations = response.results
        this.pages = response.info.pages
        this.currentPage = 1
      }
    )
  }


}
