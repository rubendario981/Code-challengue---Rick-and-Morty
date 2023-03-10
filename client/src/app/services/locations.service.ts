import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  public url: string;
  constructor(private request: HttpClient) {
    this.url = "http://localhost:3000"
  }

  getAllLocations():Observable<any>{
    return this.request.get(`${this.url}/locations`)
  }

  getDetailLocation(id: number):Observable<any>{
    return this.request.get(`${this.url}/detail-location/${id}`)
  }

  getLocationsByPage(page: number):Observable<any>{
    return this.request.get(`${this.url}/locations-page/${page}`)
  }
}
