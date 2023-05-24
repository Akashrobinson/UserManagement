import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/modules/users/user.service';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userid: string;
  User: User = new User();

  constructor(public userService :UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.BindListUsers();
    console.log("response", this.userService.BindListUsers());
  }

  updateUser(userid: string)
  {
    console.log(userid);
    this.router.navigate(['edit-user',userid]);


  }

  deleteUser(userid: string){
    if(confirm('Are you sure to delete this record')){
      this.userService.deleteUser(userid)
      .subscribe(response =>{
      this.userService.BindListUsers();
      //this.toastr.success('Deleted Successfully','Employee');
    },
    err =>{
      console.log(err)
    }
    );
    }
    window.location.reload();
  }


 
}
