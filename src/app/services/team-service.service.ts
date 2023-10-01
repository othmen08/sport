import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
// adresse du serveur BE//
teamURL:  string="http://localhost:3000/api/teams"
// boustagi//
  constructor( private httpClient : HttpClient) { }
// array of objects//
  displayAllTeams(){
    return this.httpClient.get<{teams : any}>(this.teamURL);
  }
  
  addTeam(team){
    
   

    return this.httpClient.post<{ msg : string}>(this.teamURL, team);
  }
/
}