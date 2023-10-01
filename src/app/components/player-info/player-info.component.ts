import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  playersTable:any =  [
    {id:1, name: "Messi", nbr: "10", pos: "ATK",  img: ""},
    {id:2, name: "C.Ronaldo", nbr: "7", pos: "ATK",  img: ""},
    {id:3, name: "Ramos", nbr: "4", pos: "DEF",  img: ""},
    
    ];

    findedplayer : any ;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    for (let i = 0; i < this.playersTable.length; i++) {
      if (this.playersTable[i].id==id) {
        this.findedplayer= this.playersTable[i];
        break;
      }
      
    }
    console.log("here finded match", this.findedplayer);
    
  }

}
