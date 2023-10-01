import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playersTable:any =  [
    {name: "Messi", nbr: "10", pos: "ATK",  img: ""},
    {name: "C.Ronaldo", nbr: "7", pos: "ATK",  img: ""},
    {name: "Ramos", nbr: "4", pos: "DEF",  img: ""},
    
    ];
  constructor() { }

  ngOnInit() {
  }

}
