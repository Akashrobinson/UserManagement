import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './modules/users/users.component';
import { UserListComponent } from './modules/users/user-list/user-list.component';
import { UserDetailsComponent } from './modules/users/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './modules/users/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './modules/users/edit-user/edit-user.component';
import { LoginComponent } from './modules/users/login/login.component';
import { NavBarComponent } from './modules/users/nav-bar/nav-bar.component';
import { SideNavBarComponent } from './modules/users/side-nav-bar/side-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserListComponent,
    UserDetailsComponent,
    AddUserComponent,
    EditUserComponent,
    LoginComponent,
    NavBarComponent,
    SideNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
