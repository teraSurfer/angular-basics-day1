import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CricketService {

private baseUrl = "http://192.168.0.103:3030";  
  constructor(private http: HttpClient) { }
  
  getPlayers () {
    return this.http.get(`${this.baseUrl}/players`);
  }

}
