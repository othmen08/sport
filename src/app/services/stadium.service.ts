import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StadiumService {
  stadiumUrl: string ="http://localhost:3000/api/stadium";
  constructor(private httpClient: HttpClient) { }

  getAllStadiums(){
    return this.httpClient.get<{ stadiums: any }>(this.stadiumUrl);
  }
  displayStadiumById(id){
    return this.httpClient.get(`${this.stadiumUrl}/${id}`);
  }
  // boolean, string
  deleteStadium(id){
  return this.httpClient.delete(`${this.stadiumUrl}/${id}`);
  }
  // boolean, string
  addStadium(stadiumObj){
    let formData= new FormData();
    //comment remplir le formData
    formData.append("name",stadiumObj.name);
    formData.append("city",stadiumObj.city);
    formData.append("capacity",stadiumObj.capacity);
    formData.append("tId", stadiumObj.tId);
    
  return this.httpClient.post<{ msg: any }>(this.stadiumUrl,formData);
  }
  // boolean, string
  editStadium(newStadium){
  return this.httpClient.put(this.stadiumUrl,newStadium);
  }

}
