import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { CricketService } from '../cricket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.scss']
})
export class ViewPlayerComponent implements OnInit {
player: Player;
  constructor(private service: CricketService,private route: ActivatedRoute) { }

  ngOnInit() {
    //get route parameter i.e. ID of player from url; + here implies conversion of ID of type string to number
    const id = +this.route.snapshot.params.id;
    console.log(id);
    this.getPlayer(id);
  }
  getPlayer(id) {
    this.service.getPlayer(id).subscribe((res: Player) => {
      this.player = res;
    }, err => {
      console.log(err);
    });
  }
}
