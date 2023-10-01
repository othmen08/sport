import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  matchesTable: any = [];
  searchForm: FormGroup;
  findedScore: any = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.matchesTable = JSON.parse(localStorage.getItem("matches") || "[]");

    this.searchForm = this.formBuilder.group({
      scoreOne: ["", [Validators.required]],
      scoreTow: ["", [Validators.required]],
    });
  }

  search() {


    let searchValues = this.searchForm.value;

    this.findedScore = [];

    // for (let i = 0; i < this.matchesTable.length; i++) {
    //   if (
    //     this.matchesTable[i].scoreOne == searchValues.scoreOne &&
    //     this.matchesTable[i].scoreTwo == searchValues.scoreTow
    //   ) {
    //     this.findedScore.push(this.matchesTable[i]);
    //   }
    // }
    

    this.findedScore = this.matchesTable.filter((elt) => {
      return(
        elt.scoreOne == searchValues.scoreOne &&
        elt.scoreTwo == searchValues.scoreTow
      )
    })

  }
}
