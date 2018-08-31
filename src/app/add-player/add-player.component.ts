import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { CricketService } from '../cricket.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
player: Player = {
  id: null,
  name: '',
  country: '',
  category: '',
  image: '',
  createdAt: null,
  updatedAt: null
};
  constructor(private service: CricketService) { }

  ngOnInit() {
  }
  createPlayer() {
    this.service.createPlayer(this.player).subscribe((res: any) => {
      console.log(res);
      alert('created new player successfully');
    }, err => {
      console.log(err);
      alert('player creation failed try again...');
    })
  }
}
