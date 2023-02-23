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

  getAllCharacters():Observable<any>{
    return this.request.get(`${this.url}/locations`)
  }

  getDetailCharacter(id: number):Observable<any>{
    return this.request.get(`${this.url}/detail-location/${id}`)
  }
}
