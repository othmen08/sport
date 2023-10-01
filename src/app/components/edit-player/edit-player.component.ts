import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playersTable:any =  [
    {id:1, name: "Messi", nbr: "10", pos: "ATK",  img: ""},
    {id:2, name: "C.Ronaldo", nbr: "7", pos: "ATK",  img: ""},
    {id:3, name: "Ramos", nbr: "4", pos: "DEF",  img: ""},
    
    ];
  playerForm:FormGroup;

  findedPlayer:any ={};
  constructor(private activateRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    let id=this.activateRoute.snapshot.paramMap.get("id");
    for (let i = 0; i < this.playersTable.length; i++) {
     if (this.playersTable[i].id==id) {
      this.findedPlayer=this.playersTable[i];
      break;
     }
    }
    console.log( "here finded Player",  this.findedPlayer);
    
  }
  editPlayer(){
   
    this.router.navigate([`admin`])
  }

}