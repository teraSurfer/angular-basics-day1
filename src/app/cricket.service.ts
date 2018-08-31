import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class CricketService {

private baseUrl = "http://192.168.0.103:3030";  
  constructor(private http: HttpClient) { }
  
  getPlayers () {
    return this.http.get(`${this.baseUrl}/players`);
  }

  updatePlayer(player: Player) {
    return this.http.patch(`${this.baseUrl}/players/${player.id}`, player);
  }

}
