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

@NgModule({
  declarations: [
    AppComponent,
    RegisterStudentsComponent,
    LoginComponent,
    CoursesComponent
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
