import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  singupForm: FormGroup;
  title: string;
  path: string;
  imagePreview : any ;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.path = this.router.url
    this.title = this.path == "/subscription" ? "singup User" : "Singup Admin";
    this.singupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      img : [""],
    })
  }
  signup() {


    this.singupForm.value.role =
      this.path == "/subscription" ? "user" : "admin"
    console.log("here user", this.singupForm.value);
    this.userService.signup(this.singupForm.value,this.singupForm.value.img).subscribe(
      (response) => {
        console.log(" here response from be :  ", response.msg);
      }
    )

  }

  onImageSelected(event:Event){

    const file = (event.target as HTMLInputElement).files[0];
 this.singupForm.patchValue({ img: file });
 this.singupForm.updateValueAndValidity();
 const reader = new FileReader();
 reader.onload = () => {
 this.imagePreview = reader.result as string

};
reader.readAsDataURL(file);
}
}

