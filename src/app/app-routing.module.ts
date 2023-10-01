import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayersComponent } from './components/add-players/add-players.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchinfoComponent } from './components/matchinfo/matchinfo.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "signin", component: LoginComponent },
  { path: "subscription", component: SignupComponent },
  { path: "signup", component: SignupComponent },
{path: "addMatch", component: AddMatchComponent},
{path:"addPlayers", component: AddPlayersComponent},
{path:"addTeam", component: AddTeamComponent},
{path:"admin", component: AddAdminComponent},
{path: "matches", component:MatchesComponent},
{path: "players" , component : PlayersComponent},
{path: "search" , component : SearchComponent},
{path: "profile",component: ProfileComponent},
// path paramétré
{path: "matchInfo/:id",component:MatchinfoComponent},
{path: "playerInfo/:id",component:PlayerInfoComponent},
{path: "teamInfo/:id",component:TeamInfoComponent},
{path: "editMatch/:id",component:EditMatchComponent},
{path: "editPlayer/:id",component:EditPlayerComponent},
{path: "editTeam/:id",component:EditTeamComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
