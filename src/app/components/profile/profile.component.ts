import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  findedUser: any = {};
  updateUser:any;
  id: any;
  profileForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {


    this.id = localStorage.getItem("connectedUser");
    console.log("this id is : ", this.id);

    this.userService.displayUser(this.id).subscribe(
      (response) => {
        console.log("here response from BE", response.user);
        this.findedUser = response.user;
      }
    )
    this.profileForm = this.formBuilder.group({
      firstName: ["", [Validators.required,]],
      lastName: ["", [Validators.required,]],
    })
  }

  updateProdile() {
    this.updateUser= this.profileForm.value;
    this.updateUser._id=this.id

    console.log("here user", this.updateUser);
    this.userService.updateUser(this.updateUser).subscribe((response)=>{
      console.log("Here response from BE", response);
      this.router.navigate([""])      
    })
  }
}
