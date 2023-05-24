import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './modules/users/user-list/user-list.component';
import { AddUserComponent } from './modules/users/add-user/add-user.component';
import { EditUserComponent } from './modules/users/edit-user/edit-user.component';
import { LoginComponent } from './modules/users/login/login.component';
import { UserDetailsComponent } from './modules/users/user-details/user-details.component';

const routes: Routes = [
  {path: 'list', component:  UserListComponent},
  {path: 'add-user', component:  AddUserComponent},
  {path: 'edit-user/:userid', component:  EditUserComponent},
  {path: '', component:  LoginComponent},
  {path: 'home', component:  UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
