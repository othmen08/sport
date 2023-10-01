import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matchesTable: any = [];

  constructor(
    private matchService: MatchService
  ) { }

  ngOnInit() {

this.matchService.displayAllMatches().subscribe(
  (response)=>{
console.log("here msg from Bl",response);
this.matchesTable=response.matches;


  }
)
    // this.matchesTable=JSON.parse(localStorage.getItem("matches" )|| "[]");


  }
  updateMatches(T:any){
    this.matchesTable=T;
  }

 

}
