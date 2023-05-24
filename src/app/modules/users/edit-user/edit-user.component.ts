import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userId: string;
  user: User = new User();

  constructor(private route: ActivatedRoute,public userService : UserService,private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userid'];
    this.userService.getUser(this.userId)
      .subscribe(data => {
        console.log(data)
        this.user = data;




        this.userService.formData = Object.assign({}, data);

      },
        error => console.log(error)
      );
  }

  onSubmit(form : NgForm)
  {
    this.UpdateRecord(form)
  }

  sentValues : User
  
  // idGenerate( id : number){
  //   var i ;
  //   for(i=0 ;i<9999 ; i++){
  //     if (i > id){
  //       return i;
  //     }
  //   }
  // }

  //Insert
  InsertRecord(form : NgForm){
    console.log("Inserting");
    this.sentValues = form.value
    console.log('sentValues =');
    console.log(this.sentValues);
   
    this.userService.insertUser(form.value).subscribe(
      (result)=>{
        console.log(result);
        
        //alert("Added Successfully");
        //this.toastr.success('STAFF added successfully ','List of STAFF');

        this.resetForm(form);
        this.router.navigate(['list']);
      }
    )
  }

  UpdateRecord(form : NgForm){
    console.log("Updating");
    this.userService.updateUser(form.value).subscribe(
      (result)=>{
        console.log(result);
        
        //this.toastr.success('STAFF updated successfully ','List of STAFF');
        this.resetForm(form);
        this.router.navigate(['list']);
       // alert("Updated Successfully");
      }
    )
  }

  resetForm(form : NgForm){
    if(form!=null){
      form.resetForm();
    }
  }

}
