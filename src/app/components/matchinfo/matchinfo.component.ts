import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matchinfo',
  templateUrl: './matchinfo.component.html',
  styleUrls: ['./matchinfo.component.css']
})
export class MatchinfoComponent implements OnInit {
  
    findedMatch : any ;

  constructor( private activatedRoute : ActivatedRoute , private matchService : MatchService) { }

  ngOnInit() {
   

    let id = this.activatedRoute.snapshot.paramMap.get("id");
 
    this.matchService.displayMatchByID(id).subscribe(
      (response)=>{
        console.log("here response from BE", response);
        this.findedMatch=response.match;
      }
    )
    console.log("here finded match", this.findedMatch);
    
  }

}
