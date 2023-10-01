import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  teamsTable: any = [
    ];
  teamForm:FormGroup;
  id: any;

  findedTeam:any ={};
  constructor(private activateRoute:ActivatedRoute,
    private router:Router) { }

    ngOnInit() {
      this.teamsTable=JSON.parse(localStorage.getItem("teams")|| "[]");
      this.id = this.activateRoute.snapshot.paramMap.get("id");
      for (let i = 0; i < this.teamsTable.length; i++) {
       if (this.teamsTable[i].id==this.id) {
        this.findedTeam=this.teamsTable[i];
        break;
       }
      
      }
      
    }

  editTeam(){
    for (let i = 0; i < this.teamsTable.length; i++) {
     if (this.teamsTable[i].id==this.id) {
       this.teamsTable[i]=this.findedTeam;
     }
     
    }
    localStorage.setItem("teams",JSON.stringify(this.findedTeam));
     this.router.navigate(["admin"]);
   }
}