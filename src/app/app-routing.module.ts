import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { ViewPlayerComponent } from './view-player/view-player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { ViewPlayersComponent } from './view-players/view-players.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddPlayerComponent
  },
  {
    path: 'view',
    component: ViewPlayersComponent
  },
  {
    path: 'view/:id',
    component: ViewPlayerComponent
  },
  {
    path: 'delete',
    component: DeletePlayerComponent
  },
  {
    path: 'update',
    component: UpdatePlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
