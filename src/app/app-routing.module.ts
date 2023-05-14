import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterStudentsComponent} from "./register-students/register-students.component";
import {LoginComponent} from "./login/login.component";
import {CoursesComponent} from "./courses/courses.component";
import {AddCourseComponent} from "./add-course/add-course.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

const routes: Routes = [
  { path: 'register', component: RegisterStudentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'addCourse', component: AddCourseComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'contactUs', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
