import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class CricketService {

private baseUrl = "http://192.168.0.103:3030";  
  constructor(private http: HttpClient) { }
  
  getPlayers (skip?: number, limit?: number) {
    if(skip && limit){
      return this.http.get(`${this.baseUrl}/players?$skip=${skip}&$limit=${limit}`);
    } else if (skip) {
      return this.http.get(`${this.baseUrl}/players?$skip=${skip}`);
    } else if (limit) {
      return this.http.get(`${this.baseUrl}/players?$limit=${limit}`);
    } else
    return this.http.get(`${this.baseUrl}/players`);
  }

  updatePlayer(player: Player) {
    return this.http.patch(`${this.baseUrl}/players/${player.id}`, player);
  }

  deletePlayer(id) {
    return this.http.delete(`${this.baseUrl}/players/${id}`);
  }

  createPlayer(player: Player) {
    return this.http.post(`${this.baseUrl}/players`, player);
  }

  getPlayer(id: number) {
    return this.http.get(`${this.baseUrl}/players/${id}`);
  }
}
