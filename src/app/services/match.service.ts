import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // adresse du serveur BE//
  matchURL: string = "http://localhost:3000/api/matches";
  // boustagi//
  constructor(private httpClient: HttpClient) { }
  // array of objects//
  displayAllMatches() {
    return this.httpClient.get<{ matches: any }>(this.matchURL);
  }
  // object
  displayMatchByID(id) {
    // return  this.httpClient.get(this.matchURL + "/" + id );
    return this.httpClient.get<{ match: any }>(`${this.matchURL}/${id}`);

  }
  // boolean , string
  deleteMatch(id) {
    return this.httpClient.delete(`${this.matchURL}/${id}`);
  }
  // boolean , string
  addMatch(matchObj) {
    return this.httpClient.post<{ msg: string }>(this.matchURL, matchObj);
  }
  // boolean , string
  editMatch(newMatch) {
    return this.httpClient.put<{isUpdated: boolean}>(this.matchURL, newMatch);

  }
}
