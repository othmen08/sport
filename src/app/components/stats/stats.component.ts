import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

tab: any =[
  {p:1,team:"FCB",w:"12",d:"2",l:"1",pts:38},
  {p:1,team:"RMD",w:"10",d:"6",l:"2",pts:36},
  {p:1,team:"ATM",w:"10",d:"4",l:"4",pts:34},
  {p:1,team:"SEV",w:"8",d:"5",l:"4",pts:29},
];

  constructor() { }

  ngOnInit() {
  }

}
