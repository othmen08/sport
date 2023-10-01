import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamsTable: any = [
    
    ];
  

  constructor(private router: Router) { }

  ngOnInit() {
    this.teamsTable=JSON.parse(localStorage.getItem("teams" )|| "[]");
  }
  goToDisplay(id:number)
  {
   
    this.router.navigate([`teamInfo/${id}`]);
  }
  editTeam(id:number) {
    
    this.router.navigate([ `editTeam/${id}`]);
  }
  deleteMatch(id:number){
    for (let i = 0; i < this.teamsTable.length; i++) {
      if (this.teamsTable[i].id==id) {
        this.teamsTable.splice(i,1);
        break;
      }
      
    }
    localStorage.setItem("teams",JSON.stringify(this.teamsTable));
  }
}
