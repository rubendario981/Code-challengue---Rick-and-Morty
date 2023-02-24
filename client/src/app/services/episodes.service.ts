import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {
  public url: string;
  constructor(private request: HttpClient) {
    this.url = "http://localhost:3000"
  }

  getAllEpisodes():Observable<any>{
    return this.request.get(`${this.url}/episodes`)
  }

  getDetailEpisode(id: number):Observable<any>{
    return this.request.get(`${this.url}/episode/${id}`)
  }
}
