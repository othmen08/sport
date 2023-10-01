import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { InfoComponent } from './components/info/info.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayersComponent } from './components/add-players/add-players.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchinfoComponent } from './components/matchinfo/matchinfo.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamComponent } from './components/team/team.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { SearchComponent } from './components/search/search.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';
import { StadiumComponent } from './components/stadium/stadium.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    InfoComponent,
    ArticlesComponent,
    HomeComponent,
    AddMatchComponent,
    AddPlayersComponent,
    AddTeamComponent,
    AddAdminComponent,
    MatchesTableComponent,
    TeamsTableComponent,
    MatchesComponent,
    PlayersComponent,
    PlayerComponent,
    MatchinfoComponent,
    PlayerInfoComponent,
    TeamComponent,
    PlayersTableComponent,
    TeamInfoComponent,
    EditMatchComponent,
    EditPlayerComponent,
    EditTeamComponent,
    SearchComponent,
    AsterixPipe,
    ReversePipe,
    ProfileComponent,
    StadiumComponent,
    
    
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
