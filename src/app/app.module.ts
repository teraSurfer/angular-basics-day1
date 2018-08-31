import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { ViewPlayerComponent } from './view-player/view-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';
import { ViewPlayersComponent } from './view-players/view-players.component';
import { CricketService } from './cricket.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddPlayerComponent,
    DeletePlayerComponent,
    ViewPlayerComponent,
    UpdatePlayerComponent,
    ViewPlayersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [CricketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
