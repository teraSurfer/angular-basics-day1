import { Component, OnInit } from '@angular/core';
import { CricketService } from '../cricket.service';
import { Player } from '../player';

@Component({
  selector: 'app-view-players',
  templateUrl: './view-players.component.html',
  styleUrls: ['./view-players.component.scss']
})
export class ViewPlayersComponent implements OnInit {
  page = 1;
  players: Player[] = [];
  playersPerPage: number = 5;
  playersLength: number;
  constructor(private service: CricketService) { }

  ngOnInit() {
    console.log('hello');
    this.getPlayers(0, this.playersPerPage);
  }

  loadPage(evt) {
    this.getPlayers(evt-1, this.playersPerPage);
  }

  getPlayers (skip, limit?:number) {
    this.service.getPlayers(skip*this.playersPerPage, limit).subscribe((res: any)=> {
      this.players = res.data;
      this.playersLength = res.total;
      console.log(this.playersLength);
    }, err => {
      console.log(err);
    })
  }

}
