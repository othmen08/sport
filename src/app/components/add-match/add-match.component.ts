import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { generateId } from 'src/app/data/genericfunction';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
match : any = {};
matchForm : FormGroup;

  constructor( private matchService : MatchService) { }

  ngOnInit() {
  }
  addMatch(){


    console.log("here match object", this.match);

    this.matchService.addMatch(this.match).subscribe(
      (response)=>{
        console.log("here response from BE", response);
        
      }
    )
    // let matchesTab = JSON.parse(localStorage.getItem("matches")  || "[]" );
    // this.match.id=generateId(matchesTab);
    // matchesTab.push(this.match);
    // localStorage.setItem("matches", JSON.stringify(matchesTab));
  }
}
