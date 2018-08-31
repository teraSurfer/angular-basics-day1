import { Component, OnInit } from '@angular/core';
import { CricketService } from '../cricket.service';
import { Player } from '../player';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.scss']
})
export class DeletePlayerComponent implements OnInit {

  playerList: Player[] = [];
  constructor(private service: CricketService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this.service.getPlayers().subscribe((res: any) => {
      this.playerList = res.data;
    }, err => {
      console.log(err);
    })
  }

  deletePlayer(id) {
    console.log(id);
    this.service.deletePlayer(id).subscribe((res: any) => {
      alert('player deleted!');
    }, err => {
      console.log(err);
      alert('delete failed!');
    })
  }

}
