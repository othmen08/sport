import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  playersTable:any =  [
    {id:1, name: "Messi", nbr: "10", pos: "ATK",  img: ""},
    {id:2, name: "C.Ronaldo", nbr: "7", pos: "ATK",  img: ""},
    {id:3, name: "Ramos", nbr: "4", pos: "DEF",  img: ""},
    
    ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToDisplay(id)
  {
   
    this.router.navigate([`playerInfo/${id}`]);
  }
  editPlayer(id) {
    
    this.router.navigate([ `editPlayer/${id}`]);
  }
}
