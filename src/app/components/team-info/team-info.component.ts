import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  teamsTable: any = [
    {id:1, name: "EST", owner: "ali" , stadium: "rades", foundation: "CA"},
    {id:2, name: "CA", owner: "med" , stadium: "rades", foundation: "CA"},
    {id:3, name: "CSS", owner: "ahmed" , stadium: "taib mhiri", foundation: 1928},
    ];
    findedteam : any ;
    constructor(private activatedRoute : ActivatedRoute) { }
  
    ngOnInit() {
      let id = this.activatedRoute.snapshot.paramMap.get("id");
      for (let i = 0; i < this.teamsTable.length; i++) {
        if (this.teamsTable[i].id==id) {
          this.findedteam= this.teamsTable[i];
          break;
        }
        
      }
      console.log("here finded match", this.findedteam);
      
    }
  
  }
  