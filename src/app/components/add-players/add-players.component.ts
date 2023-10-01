import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent {
  player: any = {};
  imagePreview: any;
  playerForm: FormGroup;
  teams: any =[];
  teamId : any;


  constructor(private playerService: PlayerService,
    private teamService : TeamService) { }

  ngOnInit() {

    this.teamService.displayAllTeams().subscribe((response)=>{
      this.teams = response.teams;
      this.teamId=this.teams[0]._id;
    })

   

  }
  selectTeam(event){
    console.log("here id teamId",event.target.value);
    this.teamId= event.target.value;
    
  }


  addPlayer() {

    this.player.tId= this.teamId
    console.log("here player object", this.player);



    this.playerService.addPlayer(this.player, this.player.img).subscribe(
      (response) => {
        console.log("here response from be :  ", response.msg);
      }
    );

  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.player.img = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}

