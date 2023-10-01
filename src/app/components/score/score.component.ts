import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  matchesTable: any = []
  @Input() matchesinput: any;
  @Output() matchesOutput: EventEmitter<any>= new EventEmitter() ;


  constructor() { }

  ngOnInit() {

    this.matchesTable=JSON.parse(localStorage.getItem("matches" )|| "[]");
  }
  scoreColor(a, b) {
    if (a > b) {
      return "green";
    } else if (a < b) {
      return "red";
    }
    else {
      return "blue";
    }
  }
  deleteMatch(id:number){
    for (let i = 0; i < this.matchesTable.length; i++) {
      if (this.matchesTable[i].id==id) {
        this.matchesTable.splice(i,1);
        this.matchesOutput.emit(this.matchesTable);
        break;
      }
      
    }
    localStorage.setItem("matches",JSON.stringify(this.matchesTable));
  }



}
