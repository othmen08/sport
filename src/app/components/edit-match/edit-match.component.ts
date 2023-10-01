import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  updateMatchesTab: any = [];
  matchForm:FormGroup;
  findedMatch:any ={};
  id: any;
  constructor(private activateRoute:ActivatedRoute,
    private matchService : MatchService,
    private router:Router) { }

  ngOnInit() {
    // this.matchesTab=JSON.parse(localStorage.getItem("matches")|| "[]");

    this.id = this.activateRoute.snapshot.paramMap.get("id");

    this.matchService.displayMatchByID(this.id).subscribe((response=>{
console.log("here msg fr bl", response);

this.findedMatch=response.match;



    }))

    // for (let i = 0; i < this.matchesTab.length; i++) {
    //  if (this.matchesTab[i].id==this.id) {
    //   this.findedMatch=this.matchesTab[i];
    //   break;
    //  }
    
    // }
    
  }
  editMatch(){

    this.updateMatchesTab=this.findedMatch;
    this.updateMatchesTab._id=this.id;

    
    console.log("here user", this.updateMatchesTab);
    this.matchService.editMatch(this.updateMatchesTab).subscribe((response)=>{
      console.log("Here response from BE", response);

      this.router.navigate(["admin"]);    
    })

  //  for (let i = 0; i < this.matchesTab.length; i++) {
  //   if (this.matchesTab[i].id==this.id) {
  //     this.matchesTab[i]=this.findedMatch;
  //   }
    
  //  }
  //  localStorage.setItem("matches",JSON.stringify(this.matchesTab));
    
  }

}