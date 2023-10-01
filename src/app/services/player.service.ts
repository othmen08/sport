import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  // adresse du serveur BE//
  playerURL:  string="http://localhost:3000/api/players"
// boustagi//
  constructor( private httpClient : HttpClient) { }
// array of objects//
  displayAllPlayers(){
    return this.httpClient.get(this.playerURL);
  }
  // object
  displayPlayerByID(id){
// return  this.httpClient.get(this.playerURL + "/" + id );
return  this.httpClient.get(`${this.playerURL}/${id}`);
    
  }
  // boolean , string
  deletePlayer(id){
return this.httpClient.delete(`${this.playerURL}/${id}`);
  }
 // boolean , string
  addPlayer(PlayerObj:any,img:File){
    let formData = new FormData();
   // comment remplir le formData
   formData.append("name",PlayerObj.name);
   formData.append("position",PlayerObj.position);
   formData.append("number",PlayerObj.number);
   formData.append("img",img);

    return this.httpClient.post<{msg : string}>(this.playerURL,formData);
  }
// boolean , string
  editPlayer(newPlayer){
    return this.httpClient.put(this.playerURL,newPlayer);

  }
}