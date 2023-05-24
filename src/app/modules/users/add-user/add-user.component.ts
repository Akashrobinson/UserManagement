import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(public userService : UserService,private router: Router) { }

  ngOnInit(): void {
  }

  // onSubmit(form : NgForm){
  //   let addId = this.userService.formData.id;
  //   if(addId == '0' || addId == null){
  //     console.log(form.value);
  //     this.InsertRecord(form);
  //     //window.location.reload();
  //   }
  //   else{
  //     console.log(form.value);
  //     this.UpdateRecord(form);
  //   }
  // }

  onSubmit(form : NgForm)
  {
    this.InsertRecord(form)
  }

  sentValues : User
  
  idGenerate( id : number){
    var i ;
    for(i=0 ;i<9999 ; i++){
      if (i > id){
        return i;
      }
    }
  }

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
