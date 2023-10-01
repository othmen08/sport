import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StadiumService } from 'src/app/services/stadium.service';

import { TeamService,  } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
   //object
   team: any = {};
   stadiums: any = [];
   stadiumId:any;
   // Form ID
   teamForm: FormGroup;
   constructor(private teamService: TeamService, private stadiumServise:StadiumService) { }
 
   ngOnInit() {
     this.stadiumServise.getAllStadiums().subscribe((response) => {
    
       
       this.stadiums = response.stadiums;
       console.log("here is stadiums",this.stadiums);
       this.stadiumId=this.stadiums[0]._id;
     })
   }
   //Method
   addTeam() {
     this.team.sId=this.stadiumId;
     console.log("here team object", this.team);
     this.teamService.addTeam(this.team).subscribe((response) => {
       console.log("Here response from BE", response.msg);
     });
   }
   selectStadium(event){
     console.log("Here Stadium :",event.target.value);
     this.stadiumId=event.target.value;
   }
 }
