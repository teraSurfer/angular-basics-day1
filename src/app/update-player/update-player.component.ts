import { Component, OnInit } from '@angular/core';
import { CricketService } from '../cricket.service';
import { Player } from '../player';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.scss']
})
export class UpdatePlayerComponent implements OnInit {

  playerList: Player[] = []; 
  selectedPlayer: Player;
  showEditor = false;
  editedDetails: Player;
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

  changePlayer(id) {
    console.log(id);
    this.playerList.forEach(player => {
      console.log(player);
      if(player.id == id) {
        this.selectedPlayer = player;
        console.log(this.selectedPlayer);
        return true;
      }
    });
  }

  editPlayer() {
    this.editedDetails = this.selectedPlayer;
    this.selectedPlayer = null;
    this.showEditor = true;
  }

  updatePlayer(){
    this.service.updatePlayer(this.editedDetails).subscribe(res => {
      console.log(res);
      //this.selectedPlayer = this.editedDetails;
      this.getPlayers();
      this.showEditor = false;
    }, err => {
      console.log(err);
    })
  }
}
