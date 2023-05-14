import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterStudentsComponent } from './register-students/register-students.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import {MyTutorServiceService} from "./services/myTutorService.service";
import { AddCourseComponent } from './add-course/add-course.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterStudentsComponent,
    LoginComponent,
    CoursesComponent,
    AddCourseComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MyTutorServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
