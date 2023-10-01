import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matchesTable: any = [];
   

  constructor(private router: Router ,private matchService : MatchService ) { }

  ngOnInit() {
    // this.matchesTable=JSON.parse(localStorage.getItem("matches" )|| "[]");
    this.matchService.displayAllMatches().subscribe(
      (response)=>{
        console.log("here response from BE", response);
        this.matchesTable=response.matches;
      }
    )
  }
  goToDisplay(id:number)
  {
   
    this.router.navigate([`matchInfo/${id}`]);
  }
  editMatch(id:number) {
    
    this.router.navigate([ `editMatch/${id}`]);
  }
  deleteMatch(id:number){
    for (let i = 0; i < this.matchesTable.length; i++) {
      if (this.matchesTable[i].id==id) {
        this.matchesTable.splice(i,1);
        break;
      }
      
    }
    localStorage.setItem("matches",JSON.stringify(this.matchesTable));
  }
  
}
