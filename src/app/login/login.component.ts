import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../assets/vendor/animate.css/animate.min.css','../assets/vendor/aos/aos.css','../assets/vendor/bootstrap/css/bootstrap.min.css','../assets/vendor/bootstrap-icons/bootstrap-icons.css','../assets/vendor/boxicons/css/boxicons.min.css','../assets/vendor/remixicon/remixicon.css','../assets/vendor/swiper/swiper-bundle.min.css','../assets/css/style.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit() {
  }

  formData = {
    email: '',
    password:''
  };
  onSubmit() {
    // Send POST request to the server
    this.http.post('http://localhost:5000/loginStudents', this.formData)
      .subscribe(
        response => {
          if(response){
            alert('Successfully logged in');
            this.router.navigate(['/register']);
          }
          else
            alert('Incorrect Username or Password');
        },
        error => {
          // Handle error if the request fails
          alert('Request to login is failed');
        }
      );

    this.formData.email = '';
    this.formData.password = '';
  }
  onRegisterButtonClick() {
    this.router.navigate(['/register']);
  }
  onLoginButtonClick() {
    this.router.navigate(['/test']);
  }
}
