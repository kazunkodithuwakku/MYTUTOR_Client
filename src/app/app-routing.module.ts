import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterStudentsComponent} from "./register-students/register-students.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'register', component: RegisterStudentsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
