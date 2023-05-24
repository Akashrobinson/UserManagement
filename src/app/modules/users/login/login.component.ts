import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  isSubmitted = false;
  error: string = '';
  name : string;
  password : string;
  credentials : User = new User();
  constructor(private route: Router, private formBuilder: FormBuilder, public userservice: UserService, private http: HttpClient) { }

  ngOnInit(): void {

    //create a reactive form model
    this.LoginForm = this.formBuilder.group({
      //FormControlName feilds
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]


    });
  }
  //get all control for validation
  get formControls() {
    return this.LoginForm.controls;


  }

 successful : any;


 login(): void {
  this.credentials.name = this.name;
    this.credentials.password = this.password;

  //  if (this.loginForm.valid) {
  this.userservice.authenticate(this.credentials.name, this.credentials.password).subscribe((res: User) => {

    console.log(res)
    // alert("login success!!!!")
  });
  // }
}
 }

